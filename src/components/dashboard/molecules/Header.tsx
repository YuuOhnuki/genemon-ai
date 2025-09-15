'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '../atoms/Logo';
import { SearchBar } from '../atoms/SearchBar';
import { NotificationBadge } from '../atoms/NotificationBadge';
import UserAvatar from '../atoms/UserAvatar';

export function Header({
    onMenuToggle,
    user,
}: {
    onMenuToggle: () => void;
    user?: { name?: string; avatar?: string | null; email: string | null };
}) {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" onClick={onMenuToggle} className="lg:hidden">
                        <Menu className="w-5 h-5" />
                    </Button>
                    <Logo />
                </div>

                <div className="flex items-center space-x-4">
                    <SearchBar />
                    <NotificationBadge count={3} />
                    <UserAvatar user={user} />
                </div>
            </div>
        </header>
    );
}
