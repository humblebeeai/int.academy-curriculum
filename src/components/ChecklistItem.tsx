import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './ChecklistItem.module.css';

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
                styles.card,
                isChecked ? styles.cardChecked : ""
            )}
            onClick={toggleCheck}
        >
            <div className={styles.checkboxWrapper}>
                <div
                    className={clsx(
                        styles.customCheckbox,
                        isChecked ? styles.customCheckboxChecked : ""
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

            <div className={clsx(styles.content, isChecked ? styles.contentChecked : "")}>
                {children}
            </div>
        </div>
    );
}
