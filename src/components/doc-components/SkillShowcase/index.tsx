import React from 'react';
import * as Icons from 'lucide-react';

import styles from './SkillShowcase.module.css';

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
        <div className={styles.grid}>
            {skills.map((skill, index) => {
                // Dynamically get icon from Lucide, fallback to Sparkles
                // @ts-ignore
                const IconComponent = Icons[skill.iconString] || Icons.Sparkles;

                return (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <IconComponent size={24} strokeWidth={2.5} />
                        </div>

                        <h4 className={styles.title}>
                            {skill.title}
                        </h4>

                        <p className={styles.description}>
                            {skill.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
