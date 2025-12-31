import React from 'react';

export const Skill = ({ icon, title, children }) => (
    <div className="skill-item" style={{ flex: '1 1 300px', padding: '1rem' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
        <h4 style={{ margin: '0.5rem 0' }}>{title}</h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--ifm-color-emphasis-700)' }}>{children}</p>
    </div>
);

export default function SkillShowcase({ children }) {
    return (
        <div className="skill-showcase" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            margin: '2rem 0',
            backgroundColor: 'var(--ifm-background-surface-color)',
            borderRadius: '12px',
            padding: '1rem'
        }}>
            {children}
        </div>
    );
}
