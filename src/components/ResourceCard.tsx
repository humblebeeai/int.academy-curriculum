import React, { useState } from 'react';
import { ExternalLink, Video, FileText, BookOpen, Clock, BarChart, Link } from 'lucide-react';
import clsx from 'clsx';
import ChecklistItem from './ChecklistItem';

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

const DifficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200',
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
        <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm uppercase tracking-wide font-bold text-[var(--ifm-color-emphasis-600)]">
                    <Icon size={16} />
                    {type}
                </div>
                {difficulty && (
                    <span className={clsx("text-xs px-2 py-0.5 rounded border capitalize", DifficultyColors[difficulty])}>
                        {difficulty}
                    </span>
                )}
            </div>

            <h4 className="text-lg font-bold mb-1 text-[var(--ifm-color-primary)] flex items-center gap-2 group-hover:underline decoration-2 underline-offset-2">
                {title}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>

            {description && <p className="text-sm text-[var(--ifm-color-emphasis-700)] mb-3 line-clamp-2">{description}</p>}

            {duration && (
                <div className="flex items-center gap-1 text-xs text-[var(--ifm-color-emphasis-500)] font-medium">
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
            className="block no-underline hover:no-underline group"
        >
            <div className="resource-card bg-[var(--ifm-card-background-color)] border border-[var(--ifm-color-emphasis-200)] rounded-xl p-5 my-4 transition-all duration-300 hover:shadow-md hover:border-[var(--ifm-color-primary-light)] relative overflow-hidden">
                <div className="flex gap-4">
                    {CardContent}
                </div>

                {/* If ID and ModuleID are provided, show a checkbox overlay/integration */}
                {id && moduleId && (
                    <div className="mt-4 pt-3 border-t border-[var(--ifm-color-emphasis-100)]" onClick={(e) => e.stopPropagation()}>
                        <div className="text-xs text-[var(--ifm-color-emphasis-500)] mb-2 uppercase font-bold tracking-wider">Mark Completed</div>
                        <ChecklistItem id={id} moduleId={moduleId}>
                            I have finished this resource
                        </ChecklistItem>
                    </div>
                )}
            </div>
        </a>
    );
}
