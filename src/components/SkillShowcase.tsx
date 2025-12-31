import React from 'react';
import * as Icons from 'lucide-react';

export interface Skill {
    iconString: string; // "Code", "Database", "Cpu" etc.
    title: string;
    description: string;
}

export interface SkillShowcaseProps {
    skills: Skill[];
}

export default function SkillShowcase({ skills }: SkillShowcaseProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {skills.map((skill, index) => {
                // Dynamically get icon from Lucide, fallback to Sparkles
                // @ts-ignore
                const IconComponent = Icons[skill.iconString] || Icons.Sparkles;

                return (
                    <div
                        key={index}
                        className="skill-card p-5 border border-[var(--ifm-color-emphasis-200)] rounded-xl bg-[var(--ifm-card-background-color)] hover:shadow-md hover:border-[var(--ifm-color-primary-light)] transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-lg bg-[var(--ifm-background-surface-color)] flex items-center justify-center mb-4 text-[var(--ifm-color-primary)]">
                            <IconComponent size={20} strokeWidth={2.5} />
                        </div>

                        <h4 className="text-base font-bold mb-2 m-0 text-[var(--ifm-color-emphasis-800)]">
                            {skill.title}
                        </h4>

                        <p className="text-sm text-[var(--ifm-color-emphasis-600)] m-0 leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
