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
  showFullDescription?: boolean;
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

type Scope = { label: string; selected: boolean; tone: "required" | "further" };

// Curriculum descriptions start with their assigned scope, e.g.
// "Required, selected scope." or "Further reading." Surface it as a badge.
function scopeOf(description?: string): Scope | undefined {
  const lead = description?.split(".")[0] ?? "";
  if (/^Further reading/i.test(lead)) return { label: "Further reading", selected: false, tone: "further" };
  if (/^Required/i.test(lead)) return { label: "Required", selected: /selected/i.test(lead), tone: "required" };
  return undefined;
}

export default function ResourceCard({
  title,
  type,
  url,
  duration,
  description,
  difficulty,
  showFullDescription = false,
}: ResourceCardProps) {
  const Icon = TypeIcons[type] || Link;
  const scope = showFullDescription ? scopeOf(description) : undefined;

  const CardContent = (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.type}>
          <Icon size={16} />
          {type}
        </div>
        {scope && (
          <span className={styles.scopeBadges}>
            <span className={clsx(styles.scopeBadge, styles[scope.tone])}>{scope.label}</span>
            {scope.selected && <span className={clsx(styles.scopeBadge, styles.selected)}>Selected scope</span>}
          </span>
        )}
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

      {description && <p data-resource-scope={showFullDescription ? "full" : undefined} className={clsx(styles.description, showFullDescription && styles.fullDescription)}>{description}</p>}

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
      data-resource-card="true"
      data-scope={scope?.tone}
    >
      <div className={styles.card}>
        <div className="resource-card-inner">{CardContent}</div>
      </div>
    </a>
  );
}
