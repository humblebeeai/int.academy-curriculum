import React from 'react';

export default function ProgressIndicator({ phase, totalPhases = 3 }) {
    const phases = [
        { id: 1, label: 'School' },
        { id: 2, label: 'Soft Landing' },
        { id: 3, label: 'Specialization' }
    ];

    return (
        <div className="progress-indicator" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                {/* Connection Line */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    height: '2px',
                    backgroundColor: 'var(--ifm-color-emphasis-200)',
                    zIndex: 0
                }} />

                {phases.map((p) => {
                    const isCompleted = p.id < phase;
                    const isCurrent = p.id === phase;
                    const isFuture = p.id > phase;

                    let color = 'var(--ifm-color-emphasis-300)';
                    let bgColor = 'var(--ifm-background-color)';
                    let borderColor = 'var(--ifm-color-emphasis-300)';

                    if (isCompleted || isCurrent) {
                        color = 'var(--ifm-color-primary)';
                        borderColor = 'var(--ifm-color-primary)';
                    }

                    if (isCurrent) {
                        bgColor = 'var(--ifm-color-primary)';
                        color = 'var(--ifm-color-white)'; // Text inside bubble
                    }

                    return (
                        <div key={p.id} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: `2px solid ${borderColor}`,
                                backgroundColor: isCurrent ? borderColor : bgColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                color: isCurrent ? 'var(--ifm-background-color)' : borderColor,
                                transition: 'all 0.3s ease'
                            }}>
                                {p.id}
                            </div>
                            <div style={{
                                marginTop: '0.5rem',
                                fontWeight: isCurrent ? 'bold' : 'normal',
                                color: isCompleted || isCurrent ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-500)',
                                fontSize: '0.9rem'
                            }}>
                                {p.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
