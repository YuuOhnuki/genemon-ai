'use client';

import { TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const colorMap = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
} as const;

export function StatCard({
    icon: Icon,
    title,
    value,
    change,
    color = 'blue',
}: {
    icon: LucideIcon;
    title: string;
    value: string;
    change?: string;
    color?: keyof typeof colorMap;
}) {
    const c = colorMap[color];
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                    {change && (
                        <div className="flex items-center mt-2">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                            <span className="text-sm text-green-600">{change}</span>
                        </div>
                    )}
                </div>
                <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                </div>
            </div>
        </div>
    );
}
