import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './CodeComparison.module.css';

export interface CodeComparisonProps {
    before: string;
    after: string;
    language?: string;
    titleA?: string;
    titleB?: string;
}

export default function CodeComparison({
    before,
    after,
    language = 'python',
    titleA = 'Before',
    titleB = 'After'
}: CodeComparisonProps) {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <button
                    onClick={() => setShowAfter(false)}
                    className={`${styles.tab} ${!showAfter ? styles.active : ''}`}
                >
                    {titleA}
                </button>
                <button
                    onClick={() => setShowAfter(true)}
                    className={`${styles.tab} ${showAfter ? styles.active : ''}`}
                >
                    {titleB}
                </button>
            </div>
            <div className={styles.content}>
                <CodeBlock language={language}>
                    {showAfter ? after : before}
                </CodeBlock>
            </div>
        </div>
    );
}
