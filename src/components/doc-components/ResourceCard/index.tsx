import React, { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Video,
  FileText,
  BookOpen,
  Clock,
  Link,
  Play,
} from "lucide-react";
import clsx from "clsx";
import styles from "./ResourceCard.module.css";
import previews from "@site/src/data/resource-previews.json";

const previewImages: Record<string, string> = previews;

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

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

// Preview banner for curriculum cards: the publisher's preview image, or a
// tile with the resource type and site when no image is available.
function Preview({ url, type, Icon }: { url: string; type: string; Icon: React.ComponentType<{ size?: number }> }) {
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  // The image can fail before hydration attaches onError; check once mounted.
  useEffect(() => {
    const element = imageRef.current;
    if (element?.complete && element.naturalWidth === 0) setFailed(true);
  }, []);
  const image = previewImages[url];
  const isVideo = type === "video" || type === "talk";
  return (
    <div className={styles.preview} aria-hidden="true">
      {image && !failed ? (
        <img ref={imageRef} src={image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      ) : (
        <div className={styles.previewFallback}>
          <Icon size={28} />
          <span>{hostOf(url)}</span>
        </div>
      )}
      {isVideo && image && !failed && <span className={styles.play}><Play size={18} fill="currentColor" /></span>}
    </div>
  );
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
        {showFullDescription && <Preview url={url} type={type} Icon={Icon} />}
        <div className="resource-card-inner">{CardContent}</div>
      </div>
    </a>
  );
}
