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
import { previewKey } from "@site/src/data/previewKey.mjs";

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

type Scope = "further" | "selected";

// Curriculum descriptions start with their assigned scope, e.g.
// "Required, selected scope." or "Further reading." Plain "Required" is the
// default and gets no badge; only the exceptions are surfaced.
function scopeOf(description?: string): Scope | undefined {
  const lead = description?.split(".")[0] ?? "";
  if (/^Further reading/i.test(lead)) return "further";
  if (/^Required/i.test(lead) && /selected/i.test(lead)) return "selected";
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
  // A lazy image that hasn't started loading has no currentSrc, so it is not
  // mistaken for a failure; later errors still reach onError.
  useEffect(() => {
    const element = imageRef.current;
    if (element?.complete && element.currentSrc && element.naturalWidth === 0) setFailed(true);
  }, []);
  const image = previewImages[previewKey(url)];
  const isVideo = type === "video" || type === "talk";
  return (
    <div className={styles.preview} aria-hidden="true">
      {image && !failed ? (
        <img ref={imageRef} src={image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      ) : (
        <div className={styles.previewFallback} title={hostOf(url)}>
          <Icon size={22} />
        </div>
      )}
      {isVideo && image && !failed && <span className={styles.play}><Play size={10} fill="currentColor" /></span>}
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
            <span className={clsx(styles.scopeBadge, styles[scope])}>{scope === "further" ? "Further reading" : "Selected scope"}</span>
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
      data-scope={scope}
    >
      <div className={clsx(styles.card, showFullDescription && styles.row)}>
        {showFullDescription && <Preview url={url} type={type} Icon={Icon} />}
        <div className="resource-card-inner">{CardContent}</div>
      </div>
    </a>
  );
}
