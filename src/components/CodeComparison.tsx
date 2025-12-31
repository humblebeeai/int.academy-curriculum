import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

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
        <div className="code-comparison my-8 border border-[var(--ifm-color-emphasis-200)] rounded-xl overflow-hidden">
            <div className="flex border-b border-[var(--ifm-color-emphasis-200)]">
                <button
                    onClick={() => setShowAfter(false)}
                    className="flex-1 p-3 text-sm font-bold cursor-pointer transition-colors"
                    style={{
                        background: !showAfter ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
                        color: !showAfter ? '#fff' : 'var(--ifm-color-emphasis-700)',
                    }}
                >
                    {titleA}
                </button>
                <button
                    onClick={() => setShowAfter(true)}
                    className="flex-1 p-3 text-sm font-bold cursor-pointer transition-colors"
                    style={{
                        background: showAfter ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
                        color: showAfter ? '#fff' : 'var(--ifm-color-emphasis-700)',
                    }}
                >
                    {titleB}
                </button>
            </div>
            <div>
                <CodeBlock language={language} className="!m-0 !rounded-none">
                    {showAfter ? after : before}
                </CodeBlock>
            </div>
        </div>
    );
}
