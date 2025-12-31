import React, { useState } from 'react';
import { ExternalLink, Video, FileText, BookOpen, Clock, BarChart, Link } from 'lucide-react';
import clsx from 'clsx';
import ChecklistItem from './ChecklistItem';
import styles from './ResourceCard.module.css';

export interface ResourceCardProps {
    title: string;
    type: 'video' | 'article' | 'course' | 'documentation';
    url: string;
    duration?: string;
    description?: string;
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    // Optional persistence props
    id?: string;
    moduleId?: string;
}

const TypeIcons = {
    video: Video,
    article: FileText,
    course: BookOpen,
    documentation: FileText,
};

export default function ResourceCard({
    title,
    type,
    url,
    duration,
    description,
    difficulty,
    id,
    moduleId,
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
                <div className="resource-card-inner">
                    {CardContent}
                </div>

                {/* If ID and ModuleID are provided, show a checkbox overlay/integration */}
                {id && moduleId && (
                    <div className={styles.checklistArea} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.checklistLabel}>Mark Completed</div>
                        <ChecklistItem id={id} moduleId={moduleId}>
                            I have finished this resource
                        </ChecklistItem>
                    </div>
                )}
            </div>
        </a>
    );
}
