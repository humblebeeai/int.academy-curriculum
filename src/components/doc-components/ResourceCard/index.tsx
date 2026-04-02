import React from "react";
import {
  ExternalLink,
  Video,
  FileText,
  BookOpen,
  Clock,
  Link,
} from "lucide-react";
import clsx from "clsx";
import styles from "./ResourceCard.module.css";

export interface ResourceCardProps {
  title: string;
  type:
    | "video"
    | "article"
    | "course"
    | "documentation"
    | "docs"
    | "tutorial"
    | "guide"
    | "book"
    | "paper"
    | "blog"
    | "practice"
    | "talk";
  url: string;
  duration?: string;
  description?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

const TypeIcons = {
  video: Video,
  article: FileText,
  course: BookOpen,
  documentation: FileText,
  docs: FileText,
  tutorial: BookOpen,
  guide: FileText,
  book: BookOpen,
  paper: FileText,
  blog: FileText,
  practice: FileText,
  talk: Video,
};

export default function ResourceCard({
  title,
  type,
  url,
  duration,
  description,
  difficulty,
}: ResourceCardProps) {
  const Icon = TypeIcons[type] || Link;

  const CardContent = (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.type}>
          <Icon size={16} />
          {type}
        </div>
        {difficulty && (
          <span className={clsx(styles.difficultyBadge, styles[difficulty])}>
            {difficulty}
          </span>
        )}
      </div>

      <h4 className={styles.title}>
        {title}
        <ExternalLink size={14} className={styles.externalIcon} />
      </h4>

      {description && <p className={styles.description}>{description}</p>}

      {duration && (
        <div className={styles.meta}>
          <Clock size={12} />
          <span>{duration}</span>
        </div>
      )}
    </div>
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <div className={styles.card}>
        <div className="resource-card-inner">{CardContent}</div>
      </div>
    </a>
  );
}
