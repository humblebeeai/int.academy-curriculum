import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import {
  ArrowRight, ArrowLeft, Terminal, Calculator, Database, Code2,
  Brain, MessageSquare, Network, Container, BarChart3, GitBranch,
  Workflow, Search, Bot, SlidersHorizontal, Activity, ClipboardCheck,
} from "lucide-react";
import styles from "./DraftLayout.module.css";

const icons = { Terminal, Calculator, Database, Code2, Brain, MessageSquare,
  Network, Container, BarChart3, GitBranch, Workflow, Search, Bot,
  SlidersHorizontal, Activity, ClipboardCheck };
type IconName = keyof typeof icons;
type ModuleKind = "required" | "elective" | "project";

export interface ModuleIntroProps {
  stageLabel: string;
  stageHref: string;
  moduleNumber?: number;
  kind: ModuleKind;
  summary: string;
  icon: IconName;
  image?: { src: string; alt: string; width: number; height: number };
}

export function DraftModule({ children }: { children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}

export function ModuleIntro({ stageLabel, stageHref, moduleNumber, kind, summary, icon, image }: ModuleIntroProps) {
  const Icon = icons[icon];
  return (
    <div className={styles.intro}>
      <div className={styles.introMeta}>
        <Link to={stageHref} className={styles.returnLink}>
          <ArrowLeft size={16} aria-hidden="true" /> {stageLabel}
        </Link>
        <span className={styles.badge}>
          {kind === "required" ? `Module ${moduleNumber} · Required` : kind === "elective" ? "Elective" : "Required project"}
        </span>
      </div>
      <p className={styles.summary}><Icon size={24} aria-hidden="true" />{summary}</p>
      {image && <figure className={styles.illustration}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
      </figure>}
    </div>
  );
}

export interface ModuleGridItem {
  title: string;
  href: string;
  outcome: string;
  prerequisites?: string;
  number?: number;
  kind: ModuleKind;
  icon: IconName;
}

export function ModuleGrid({ items }: { items: ModuleGridItem[] }) {
  return (
    <div className={styles.grid} data-draft-module-grid="true">
      {items.map(({ title, href, outcome, prerequisites, number, kind, icon }) => {
        const Icon = icons[icon];
        return <Link key={href} to={href} className={styles.moduleCard}>
          <div className={styles.cardMeta}>
            <Icon size={22} aria-hidden="true" />
            <span className={styles.cardKind}>{kind === "required" ? `Module ${number}` : kind === "elective" ? "Elective" : "Project"}</span>
            <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
          </div>
          <h3>{title}</h3>
          <p>{outcome}</p>
          {prerequisites && <p className={styles.prerequisites}><strong>Before you start:</strong> {prerequisites}</p>}
        </Link>;
      })}
    </div>
  );
}

export function SectionLinks({ items, label = "In this module" }: { items: { title: string; href: string }[]; label?: string }) {
  return <nav className={styles.sectionNav} aria-label={label}>
    <span className={styles.sectionLabel}>{label}</span>
    <div className={styles.sectionLinks}>{items.map(({ title, href }) => <Link key={href} to={href}>{title}</Link>)}</div>
  </nav>;
}

export function OverviewVideo({ videoId, title }: { videoId: string; title: string }) {
  return <div className={styles.videoBlock}>
    <div className={styles.videoFrame}>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title={title} loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
    <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
      Watch the roadmap introduction on YouTube <ArrowRight size={16} aria-hidden="true" />
    </a>
  </div>;
}
