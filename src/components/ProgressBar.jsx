import React from 'react';

export default function ProgressBar({ phase, module, estimatedHours, completedBy }) {
  // Simple visual placeholder for now as per design
  return (
    <div className="progress-bar-container" style={{
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '2rem',
      backgroundColor: 'var(--ifm-background-surface-color)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)' }}>
        <span><strong>Phase:</strong> {phase}</span>
        <span><strong>Module:</strong> {module}</span>
      </div>
      
      <div style={{ 
        height: '8px', 
        width: '100%', 
        backgroundColor: 'var(--ifm-color-emphasis-200)', 
        borderRadius: '4px',
        overflow: 'hidden' 
      }}>
        <div style={{ 
          height: '100%', 
          width: `${completedBy || 0}%`, 
          backgroundColor: 'var(--ifm-color-primary)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)' }}>
        Estimated Time: {estimatedHours} hours
      </div>
    </div>
  );
}
