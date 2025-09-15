'use client';

import { BookOpen } from 'lucide-react';

export function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">ジェネ問AI</span>
        </div>
    );
}
