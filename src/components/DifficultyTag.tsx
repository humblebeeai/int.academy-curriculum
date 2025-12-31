import React from 'react';
import clsx from 'clsx';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface DifficultyTagProps {
    level?: string;
    time?: string;
    children?: React.ReactNode;
}

export default function DifficultyTag({ level = 'beginner', time, children }: DifficultyTagProps) {
    const normalizedLevel = level.toLowerCase() as DifficultyLevel;

    const styles = {
        beginner: { bg: '#e6f4ea', text: '#1e8e3e', border: '#b7e1cd' },
        intermediate: { bg: '#fef7e0', text: '#f9ab00', border: '#fce8b2' },
        advanced: { bg: '#fce8e6', text: '#d93025', border: '#fad2cf' },
        default: { bg: '#f1f3f4', text: '#5f6368', border: '#dadce0' }
    };

    const style = styles[normalizedLevel] || styles.default;

    return (
        <div
            className="inline-block mr-2 mb-2 rounded-md px-3 py-2 border"
            style={{
                backgroundColor: style.bg,
                borderColor: style.border,
            }}
        >
            <div
                className="text-[0.7rem] font-bold uppercase tracking-wider mb-0.5"
                style={{ color: style.text }}
            >
                {level} {time && `• ${time}`}
            </div>
            {children && (
                <div className="text-sm text-[var(--ifm-color-emphasis-700)]">
                    {children}
                </div>
            )}
        </div>
    );
}
