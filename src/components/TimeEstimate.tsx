import React from 'react';
import { Clock } from 'lucide-react';

export interface TimeEstimateProps {
    minHours: number;
    maxHours: number;
    breakdownBy?: Record<string, number>; // "Reading": 10, "Coding": 20
}

export default function TimeEstimate({ minHours, maxHours, breakdownBy }: TimeEstimateProps) {
    const totalBreakdown = breakdownBy ? Object.values(breakdownBy).reduce((a, b) => a + b, 0) : 0;

    // Colors for segments
    const colors = [
        'bg-blue-500',
        'bg-purple-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-pink-500'
    ];

    return (
        <div className="time-estimate my-8 p-6 bg-[var(--ifm-background-surface-color)] rounded-xl border border-[var(--ifm-color-emphasis-200)]">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--ifm-color-primary-light)] text-white rounded-lg">
                    <Clock size={24} />
                </div>
                <div>
                    <h3 className="m-0 text-lg font-bold">Estimated Time Impact</h3>
                    <p className="m-0 text-sm text-[var(--ifm-color-emphasis-600)]">
                        {minHours}-{maxHours} hours total
                    </p>
                </div>
            </div>

            {breakdownBy && (
                <div className="breakdown">
                    {/* Visual Bar */}
                    <div className="flex h-2 w-full rounded-full overflow-hidden mb-4 bg-[var(--ifm-color-emphasis-200)]">
                        {Object.entries(breakdownBy).map(([key, hours], index) => {
                            const width = (hours / totalBreakdown) * 100;
                            return (
                                <div
                                    key={key}
                                    style={{ width: `${width}%` }}
                                    className={`${colors[index % colors.length]}`}
                                    title={`${key}: ${hours}h`}
                                />
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        {Object.entries(breakdownBy).map(([key, hours], index) => (
                            <div key={key} className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`} />
                                <span className="font-medium text-[var(--ifm-color-emphasis-700)]">{key}</span>
                                <span className="text-[var(--ifm-color-emphasis-500)]">({hours}h)</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
