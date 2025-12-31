import React from 'react';

export default function TimeEstimate({
    minHours,
    maxHours,
    breakdownBy
}) {
    return (
        <div className="time-estimate" style={{
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            padding: '1.5rem',
            borderRadius: '8px',
            margin: '1.5rem 0'
        }}>
            <h4 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ⏱️ Time Investment
            </h4>
            <div className="estimate-range" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>
                {minHours}-{maxHours} hours
            </div>

            {breakdownBy && (
                <div className="time-breakdown">
                    <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.5rem' }}>Breakdown:</p>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                        {Object.entries(breakdownBy).map(([activity, hours]) => (
                            <li key={activity} style={{ marginBottom: '0.3rem' }}>
                                <span className="activity">{activity}:</span> <strong>{hours}h</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
