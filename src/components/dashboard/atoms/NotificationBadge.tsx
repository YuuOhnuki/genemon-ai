'use client';

import { Bell } from 'lucide-react';

export function NotificationBadge({ count = 0 }: { count?: number }) {
    return (
        <div className="relative">
            <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
            {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {count}
                </span>
            )}
        </div>
    );
}
