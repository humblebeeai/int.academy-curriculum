import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Milestone, CheckCircle2, Circle, ArrowRight } from 'lucide-react';

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
        <div className="learning-path my-10 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                {modules.map((module, index) => {
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;
                    const isFuture = index > currentIndex;

                    return (
                        <div key={module.id} className="flex-1 w-full md:w-auto relative group">
                            {/* Connector Line (visible on desktop) */}
                            {index < modules.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 left-[50%] w-full h-[2px] -z-10 bg-[var(--ifm-color-emphasis-200)]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: isCompleted ? '100%' : '0%' }}
                                        className="h-full bg-[var(--ifm-color-primary)]"
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                </div>
                            )}

                            <div className="flex items-center gap-4 md:flex-col md:gap-3 p-2 rounded-lg transition-colors hover:bg-[var(--ifm-background-surface-color)]">

                                {/* Icon Wrapper */}
                                <div
                                    className={clsx(
                                        "w-10 h-10 rounded-full flex items-center justify-center border-2 z-20 transition-all shadow-sm",
                                        isCompleted ? "bg-[var(--ifm-color-primary)] border-[var(--ifm-color-primary)] text-white" :
                                            isCurrent ? "bg-[var(--ifm-background-color)] border-[var(--ifm-color-primary)] text-[var(--ifm-color-primary)] ring-4 ring-[var(--ifm-color-primary-light)]/20" :
                                                "bg-[var(--ifm-background-color)] border-[var(--ifm-color-emphasis-300)] text-[var(--ifm-color-emphasis-400)]"
                                    )}
                                >
                                    {isCompleted ? <CheckCircle2 size={20} /> :
                                        isCurrent ? <Milestone size={20} /> :
                                            <Circle size={12} fill="currentColor" className="opacity-50" />}
                                </div>

                                {/* Text Content */}
                                <div className="text-left md:text-center">
                                    <div className={clsx(
                                        "text-xs uppercase tracking-wider font-bold mb-0.5",
                                        isCompleted ? "text-[var(--ifm-color-primary)]" :
                                            isCurrent ? "text-[var(--ifm-color-primary)]" : "text-[var(--ifm-color-emphasis-500)]"
                                    )}>
                                        Step {index + 1}
                                    </div>
                                    <h4 className={clsx(
                                        "text-sm m-0 font-semibold leading-tight",
                                        isFuture ? "text-[var(--ifm-color-emphasis-500)]" : "text-[var(--ifm-color-emphasis-900)]"
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
