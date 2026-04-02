import React from "react";
import clsx from "clsx";
import styles from "./DifficultyTag.module.css";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface DifficultyTagProps {
  level?: string;
  time?: string;
  children?: React.ReactNode;
}

export default function DifficultyTag({
  level = "beginner",
  time,
  children,
}: DifficultyTagProps) {
  const normalizedLevel = level.toLowerCase() as DifficultyLevel;

  return (
    <div className={clsx(styles.tag, styles[normalizedLevel])}>
      <div className={styles.label}>
        {level} {time && `• ${time}`}
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}
