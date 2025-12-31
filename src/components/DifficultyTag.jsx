import React from 'react';

export default function DifficultyTag({ level, time, children }) {
    const getColors = (l) => {
        switch (l.toLowerCase()) {
            case 'beginner': return { bg: '#e6f4ea', text: '#1e8e3e', border: '#b7e1cd' };
            case 'intermediate': return { bg: '#fef7e0', text: '#f9ab00', border: '#fce8b2' };
            case 'advanced': return { bg: '#fce8e6', text: '#d93025', border: '#fad2cf' };
            default: return { bg: '#f1f3f4', text: '#5f6368', border: '#dadce0' };
        }
    };

    const colors = getColors(level || 'beginner');

    return (
        <div style={{
            display: 'inline-block',
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.bg,
            borderRadius: '6px',
            padding: '0.5rem 0.8rem',
            marginRight: '0.5rem',
            marginBottom: '0.5rem'
        }}>
            <div style={{ fontWeight: 'bold', color: colors.text, textTransform: 'uppercase', fontSize: '0.7rem' }}>
                {level} • {time}
            </div>
            <div style={{ fontSize: '0.9rem', marginTop: '2px' }}>
                {children}
            </div>
        </div>
    );
}
