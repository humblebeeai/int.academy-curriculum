import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Trophy, CheckCircle2 } from 'lucide-react';
import styles from './ModuleProgress.module.css';

export interface ModuleProgressProps {
    moduleId: string;
    totalItems: number;
    phase?: number;
    title?: string;
}

export default function ModuleProgress({
    moduleId,
    totalItems,
    phase,
    title,
}: ModuleProgressProps) {
    const [completedCount, setCompletedCount] = useState(0);
    const [percentage, setPercentage] = useState(0);

    // Calculate progress on mount and when interactions happen
    useEffect(() => {
        const calculateProgress = () => {
            if (typeof window === 'undefined') return;

            let count = 0;
            const prefix = `progress_${moduleId}_`;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(prefix) && localStorage.getItem(key) === 'true') {
                    count++;
                }
            }

            const finalCount = Math.min(count, totalItems);
            setCompletedCount(finalCount);
            setPercentage(Math.round((finalCount / totalItems) * 100));
        };

        calculateProgress();

        const handleProgressUpdate = () => calculateProgress();
        window.addEventListener('humblebee_progress_update', handleProgressUpdate);

        return () => {
            window.removeEventListener('humblebee_progress_update', handleProgressUpdate);
        };
    }, [moduleId, totalItems]);

    const resetProgress = () => {
        if (confirm('Reset progress for this module?')) {
            const prefix = `progress_${moduleId}_`;
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(prefix)) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
            window.dispatchEvent(new Event('humblebee_progress_update'));
        }
    };

    const isComplete = percentage === 100;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className="module-info">
                    {title && <h3 className={styles.title}>{title}</h3>}
                    {phase && <span className={styles.phaseBadge}>Phase {phase}</span>}
                </div>
                <div className={styles.percentage}>
                    {isComplete ? (
                        <Trophy size={24} className={styles.completionIcon} color="#eab308" />
                    ) : (
                        <span>{percentage}%</span>
                    )}
                </div>
            </div>

            <div className={styles.progressBarContainer} title="Complete checklist items below to update progress">
                <motion.div
                    className={clsx(
                        styles.progressBarFill,
                        isComplete ? styles.progressBarFillComplete : styles.progressBarFillInProgress
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className={styles.footer}>
                <span>
                    {completedCount} / {totalItems} Steps
                </span>
                {completedCount > 0 && (
                    <button
                        onClick={resetProgress}
                        style={{ background: 'none', border: 'none', color: 'var(--ifm-color-danger)', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline' }}
                    >
                        Reset
                    </button>
                )}
                {isComplete && (
                    <span className={styles.completionText}>
                        <CheckCircle2 size={16} /> Module Complete!
                    </span>
                )}
            </div>
        </div>
    );
}
