import React from 'react';
import ChecklistItem from './ChecklistItem';

export default function ResourceCard({
    title,
    type = 'article', // 'video' | 'article' | 'course' | 'book'
    url,
    duration,
    why,
    difficulty = 'beginner'
}) {
    const getDifficultyColor = (level) => {
        switch (level.toLowerCase()) {
            case 'beginner': return '#20c933'; // Green
            case 'intermediate': return '#ffb822'; // Orange/Yellow
            case 'advanced': return '#f44336'; // Red
            default: return '#888';
        }
    };

    const getTypeIcon = (t) => {
        switch (t.toLowerCase()) {
            case 'video': return '🎥';
            case 'article': return '📄';
            case 'course': return '🎓';
            case 'book': return '📚';
            default: return '🔗';
        }
    };

    return (
        <div className="resource-card" style={{
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '8px',
            padding: '1.5rem',
            margin: '1rem 0',
            backgroundColor: 'var(--ifm-card-background-color)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s',
        }}>
            <div className="resource-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                <span style={{
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: 'var(--ifm-color-emphasis-600)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                    {getTypeIcon(type)} {type} • {duration}
                </span>
                <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: getDifficultyColor(difficulty),
                    border: `1px solid ${getDifficultyColor(difficulty)}`,
                    padding: '2px 8px',
                    borderRadius: '12px'
                }}>
                    {difficulty}
                </span>
            </div>

            <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    {title} ↗
                </a>
            </h3>

            {why && (
                <div className="resource-why" style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    padding: '1rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                }}>
                    <strong>💡 Why this resource:</strong>
                    <p style={{ margin: '0.5rem 0 0 0' }}>{why}</p>
                </div>
            )}

            <div style={{ marginTop: '1rem', borderTop: '1px solid var(--ifm-color-emphasis-200)', paddingTop: '0.5rem' }}>
                <ChecklistItem id={`resource-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    Mark as completed
                </ChecklistItem>
            </div>
        </div>
    );
}
