import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Milestone, CheckCircle2, Circle } from 'lucide-react';
import styles from './LearningPath.module.css';

export interface ModuleStep {
    id: string;
    title: string;
    link?: string;
}

export interface LearningPathProps {
    currentModuleId: string;
    modules: ModuleStep[];
}

export default function LearningPath({ currentModuleId, modules }: LearningPathProps) {
    // Determine index of current module
    const currentIndex = modules.findIndex(m => m.id === currentModuleId);

    return (
        <div className={styles.container}>
            <div className={styles.pathWrapper}>
                {modules.map((module, index) => {
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;
                    const isFuture = index > currentIndex;

                    return (
                        <div key={module.id} className={styles.stepContainer}>
                            {/* Connector Line (visible on desktop via CSS) */}
                            {index < modules.length - 1 && (
                                <div className={styles.connectorLine}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: isCompleted ? '100%' : '0%' }}
                                        className={styles.connectorProgress}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                </div>
                            )}

                            <div className={styles.stepContent}>
                                {/* Icon Wrapper */}
                                <div
                                    className={clsx(
                                        styles.iconWrapper,
                                        isCompleted && styles.isCompleted,
                                        isCurrent && styles.isCurrent,
                                        isFuture && styles.isFuture
                                    )}
                                >
                                    {isCompleted ? <CheckCircle2 size={20} /> :
                                        isCurrent ? <Milestone size={20} /> :
                                            <Circle size={12} fill="currentColor" style={{ opacity: 0.5 }} />}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <div className={clsx(
                                        styles.stepLabel,
                                        isCompleted && styles.labelCompleted,
                                        isCurrent && styles.labelCurrent,
                                        isFuture && styles.labelFuture
                                    )}>
                                        Step {index + 1}
                                    </div>
                                    <h4 className={clsx(
                                        styles.stepTitle,
                                        !isFuture && styles.titleActive,
                                        isFuture && styles.titleFuture
                                    )}>
                                        {module.title}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
