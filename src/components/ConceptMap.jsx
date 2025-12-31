import React from 'react';
import Mermaid from '@theme/Mermaid';

export default function ConceptMap({ concepts, connections }) {
    const mermaidChart = `
    graph TB
    ${concepts.map((c) => `    ${c.id}["${c.name}"]`).join('\n')}
    ${connections.map(c => `    ${c.from} --> ${c.to}`).join('\n')}
    
    classDef prerequisite fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef current fill:#fff3e0,stroke:#f57c00,color:#000
    classDef advanced fill:#fce4ec,stroke:#c2185b,color:#000
    
    ${concepts.filter(c => c.type === 'prerequisite').map(c => `class ${c.id} prerequisite`).join('\n')}
    ${concepts.filter(c => c.type === 'current').map(c => `class ${c.id} current`).join('\n')}
    ${concepts.filter(c => c.type === 'advanced').map(c => `class ${c.id} advanced`).join('\n')}
  `;

    return (
        <div className="concept-map">
            <h3>📊 Concept Dependency Map</h3>
            <Mermaid value={mermaidChart} />
            <div className="map-legend">
                <span className="legend-item prerequisite">Prerequisites</span>
                <span className="legend-item current">Current Module</span>
                <span className="legend-item advanced">Builds On This</span>
            </div>
        </div>
    );
}
