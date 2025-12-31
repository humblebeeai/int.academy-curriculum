import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface ChecklistItemProps {
    id: string; // Unique ID within the module
    moduleId: string;
    children: React.ReactNode;
}

export default function ChecklistItem({ id, moduleId, children }: ChecklistItemProps) {
    const [isChecked, setIsChecked] = useState(false);
    const storageKey = `progress_${moduleId}_${id}`;

    useEffect(() => {
        // Load initial state
        const saved = localStorage.getItem(storageKey);
        if (saved === 'true') {
            setIsChecked(true);
        }
    }, [storageKey]);

    const toggleCheck = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        localStorage.setItem(storageKey, String(newState));

        // Dispatch custom event to notify ModuleProgress
        window.dispatchEvent(new Event('humblebee_progress_update'));
    };

    return (
        <div
            className={clsx(
                "checklist-item group flex items-start gap-4 p-4 rounded-lg my-3 transition-all duration-200 border cursor-pointer",
                isChecked
                    ? "bg-[var(--ifm-color-emphasis-100)] border-[var(--ifm-color-emphasis-300)]"
                    : "bg-[var(--ifm-background-color)] border-[var(--ifm-color-emphasis-200)] hover:border-[var(--ifm-color-primary-light)] hover:shadow-sm"
            )}
            onClick={toggleCheck}
        >
            <div className="relative mt-1 flex-shrink-0">
                <div
                    className={clsx(
                        "w-6 h-6 rounded border-2 flex items-center justify-center transition-colors",
                        isChecked
                            ? "bg-[var(--ifm-color-primary)] border-[var(--ifm-color-primary)]"
                            : "bg-transparent border-[var(--ifm-color-emphasis-400)] group-hover:border-[var(--ifm-color-primary)]"
                    )}
                >
                    <motion.div
                        initial={false}
                        animate={{ scale: isChecked ? 1 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <Check size={14} color="white" strokeWidth={3} />
                    </motion.div>
                </div>
            </div>

            <div className={clsx("flex-1 text-base leading-relaxed select-none", isChecked ? "text-[var(--ifm-color-emphasis-600)] line-through opacity-80" : "text-[var(--ifm-font-color-base)]")}>
                {children}
            </div>
        </div>
    );
}
