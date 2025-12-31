import React from 'react';
// @ts-ignore - Docusaurus theme component might likely imply implicit types or standard JS import
import Mermaid from '@theme/Mermaid';

export interface Concept {
    id: string;
    name: string;
    type: 'prerequisite' | 'current' | 'advanced';
}

export interface Connection {
    from: string;
    to: string;
}

export interface ConceptMapProps {
    concepts: Concept[];
    connections: Connection[];
}

export default function ConceptMap({ concepts, connections }: ConceptMapProps) {
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
        <div className="concept-map my-8 p-6 bg-[var(--ifm-background-surface-color)] border border-[var(--ifm-color-emphasis-200)] rounded-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                📊 Concept Dependency Map
            </h3>
            <div className="mermaid-wrapper flex justify-center">
                <Mermaid value={mermaidChart} />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm border-t border-[var(--ifm-color-emphasis-200)] pt-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-[#e3f2fd] border border-[#1976d2]"></span>
                    <span>Prerequisites</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-[#fff3e0] border border-[#f57c00]"></span>
                    <span>Current Module</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-[#fce4ec] border border-[#c2185b]"></span>
                    <span>Builds On This</span>
                </div>
            </div>
        </div>
    );
}
