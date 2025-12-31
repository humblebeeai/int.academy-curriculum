import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function CodeComparison({ before, after, language = 'python', titleA = 'Before', titleB = 'After' }) {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <div className="code-comparison" style={{ margin: '2rem 0', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: 'var(--ifm-card-border-radius)', overflow: 'hidden' }}>
            <div className="params-header" style={{ display: 'flex', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
                <button
                    onClick={() => setShowAfter(false)}
                    style={{
                        flex: 1,
                        padding: '10px',
                        background: !showAfter ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
                        color: !showAfter ? '#fff' : 'var(--ifm-color-emphasis-700)',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {titleA}
                </button>
                <button
                    onClick={() => setShowAfter(true)}
                    style={{
                        flex: 1,
                        padding: '10px',
                        background: showAfter ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
                        color: showAfter ? '#fff' : 'var(--ifm-color-emphasis-700)',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {titleB}
                </button>
            </div>
            <div className="code-content">
                <CodeBlock language={language}>
                    {showAfter ? after : before}
                </CodeBlock>
            </div>
        </div>
    );
}
