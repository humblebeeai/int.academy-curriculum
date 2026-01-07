import React from 'react';
import { Clock } from 'lucide-react';
import styles from './TimeEstimate.module.css';

export interface TimeEstimateProps {
    minHours: number;
    maxHours: number;
    breakdownBy?: Record<string, number>; // "Reading": 10, "Coding": 20
}

export default function TimeEstimate({ minHours, maxHours, breakdownBy }: TimeEstimateProps) {
    const totalBreakdown = breakdownBy ? Object.values(breakdownBy).reduce((a, b) => a + b, 0) : 0;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    <Clock size={24} />
                </div>
                <div>
                    <h3>Estimated Time Impact</h3>
                    <p>
                        {minHours}-{maxHours} hours total
                    </p>
                </div>
            </div>

            {breakdownBy && (
                <div className="breakdown">
                    {/* Visual Bar */}
                    <div className={styles.bar}>
                        {Object.entries(breakdownBy).map(([key, hours], index) => {
                            const width = (hours / totalBreakdown) * 100;
                            return (
                                <div
                                    key={key}
                                    style={{ width: `${width}%` }}
                                    className={`${styles.segment} ${styles['segment' + (index % 5)]}`}
                                    title={`${key}: ${hours}h`}
                                />
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div className={styles.legend}>
                        {Object.entries(breakdownBy).map(([key, hours], index) => (
                            <div key={key} className={styles.legendItem}>
                                <div className={`${styles.legendDot} ${styles['segment' + (index % 5)]}`} />
                                <span className={styles.legendLabel}>{key}</span>
                                <span className={styles.legendHours}>({hours}h)</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
