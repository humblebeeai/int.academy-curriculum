import React from "react";
// @ts-ignore - Docusaurus theme component might likely imply implicit types or standard JS import
import Mermaid from "@theme/Mermaid";
import styles from "./ConceptMap.module.css";

export interface Concept {
  id: string;
  name: string;
  type: "prerequisite" | "current" | "advanced";
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
    ${concepts.map((c) => `    ${c.id}["${c.name}"]`).join("\n")}
    ${connections.map((c) => `    ${c.from} --> ${c.to}`).join("\n")}

    classDef prerequisite fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef current fill:#fff3e0,stroke:#f57c00,color:#000
    classDef advanced fill:#fce4ec,stroke:#c2185b,color:#000

    ${concepts
      .filter((c) => c.type === "prerequisite")
      .map((c) => `class ${c.id} prerequisite`)
      .join("\n")}
    ${concepts
      .filter((c) => c.type === "current")
      .map((c) => `class ${c.id} current`)
      .join("\n")}
    ${concepts
      .filter((c) => c.type === "advanced")
      .map((c) => `class ${c.id} advanced`)
      .join("\n")}
  `;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>📊 Concept Dependency Map</h3>
      <div className={styles.mermaidWrapper}>
        <Mermaid value={mermaidChart} />
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.colorDot} ${styles.prerequisite}`}></span>
          <span>Prerequisites</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.colorDot} ${styles.current}`}></span>
          <span>Current Module</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.colorDot} ${styles.advanced}`}></span>
          <span>Builds On This</span>
        </div>
      </div>
    </div>
  );
}
