'use client';

import { Button } from '@/components/ui/button';

export function TestCard({
    title,
    questions,
    participants,
    category,
    difficulty,
    createdAt,
}: {
    title: string;
    questions: number;
    participants: number;
    category: string;
    difficulty: '初級' | '中級' | '上級';
    createdAt: string;
}) {
    const diffCls =
        difficulty === '初級'
            ? 'bg-green-100 text-green-800'
            : difficulty === '中級'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800';

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{questions}問</span>
                        <span>{participants}人受験</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${diffCls}`}>{difficulty}</span>
                    </div>
                </div>
                <span className="text-xs text-gray-500">{createdAt}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {category}
                </span>
                <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                        編集
                    </Button>
                    <Button size="sm">受験</Button>
                </div>
            </div>
        </div>
    );
}
