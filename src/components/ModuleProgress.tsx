import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Trophy, CheckCircle2 } from 'lucide-react';

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
            // Scan localStorage for keys starting with progress_{moduleId}_
            // Note: usage of ChecklistItem MUST use consistent ID format: progress_{moduleId}_{itemId}
            // This is a heuristic scan. For strict correctness, we'd need a registry of item IDs.
            // But passing totalItems allows us to just count *any* checked item for this module.

            // Optimization: We only check keys that strictly match the module prefix
            const prefix = `progress_${moduleId}_`;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(prefix) && localStorage.getItem(key) === 'true') {
                    count++;
                }
            }

            // Cap at totalItems just in case
            const finalCount = Math.min(count, totalItems);
            setCompletedCount(finalCount);
            setPercentage(Math.round((finalCount / totalItems) * 100));
        };

        calculateProgress();

        // Listen for custom event from ChecklistItem
        const handleProgressUpdate = () => calculateProgress();
        window.addEventListener('humblebee_progress_update', handleProgressUpdate);

        return () => {
            window.removeEventListener('humblebee_progress_update', handleProgressUpdate);
        };
    }, [moduleId, totalItems]);

    const isComplete = percentage === 100;

    return (
        <div className="module-progress-card p-6 bg-[var(--ifm-background-surface-color)] border border-[var(--ifm-color-emphasis-200)] rounded-xl my-8">
            <div className="flex justify-between items-end mb-4">
                <div>
                    {title && <h3 className="m-0 text-lg font-bold">{title}</h3>}
                    {phase && (
                        <span className="text-xs uppercase tracking-wider font-semibold text-[var(--ifm-color-emphasis-600)]">
                            Phase {phase}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    {isComplete ? (
                        <Trophy size={20} className="text-yellow-500" />
                    ) : (
                        <span className="text-2xl font-bold font-heading">{percentage}%</span>
                    )}
                </div>
            </div>

            <div className="h-3 w-full bg-[var(--ifm-color-emphasis-200)] rounded-full overflow-hidden relative">
                <motion.div
                    className={clsx(
                        "h-full rounded-full",
                        isComplete ? "bg-green-500" : "bg-[var(--ifm-color-primary)]"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className="flex justify-between mt-2 text-sm text-[var(--ifm-color-emphasis-600)] font-medium">
                <span>
                    {completedCount} / {totalItems} Steps
                </span>
                {isComplete && <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={14} /> Module Complete!</span>}
            </div>
        </div>
    );
}
