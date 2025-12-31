import React, { useState, useEffect } from 'react';

export default function ChecklistItem({ id, children, moduleId }) {
    // Ensure we consistently use client-side storage, handling SSR gracefully
    const [checked, setChecked] = useState(false);
    const [mounted, setMounted] = useState(false);
    const storageKey = `progress_${moduleId || 'general'}_${id}`;

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setChecked(JSON.parse(saved));
        }
    }, [storageKey]);

    const handleChange = (e) => {
        const newValue = e.target.checked;
        setChecked(newValue);
        localStorage.setItem(storageKey, JSON.stringify(newValue));
    };

    // Don't render interactive checkbox during SSR to avoid hydration mismatch
    if (!mounted) {
        return (
            <label className="checklist-item" style={{ display: 'flex', alignItems: 'flex-start', margin: '0.5rem 0', cursor: 'pointer' }}>
                <input type="checkbox" disabled style={{ marginRight: '10px', marginTop: '4px' }} />
                <span style={{ opacity: 0.7 }}>{children}</span>
            </label>
        );
    }

    return (
        <label className="checklist-item" style={{ display: 'flex', alignItems: 'flex-start', margin: '0.5rem 0', cursor: 'pointer' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                style={{ marginRight: '10px', marginTop: '4px', accentColor: 'var(--ifm-color-primary)' }}
            />
            <span style={{
                textDecoration: checked ? 'line-through' : 'none',
                color: checked ? 'var(--ifm-color-emphasis-500)' : 'inherit',
                transition: 'all 0.2s ease'
            }}>
                {children}
            </span>
        </label>
    );
}
