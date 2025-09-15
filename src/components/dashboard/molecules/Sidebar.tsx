'use client';

import { X, Home, FileText, PlusCircle, BarChart3, Users, User, Settings, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '../atoms/Logo';
import { NavigationItem } from './NavigationItem';

export function Sidebar({
    activeTab,
    onTabChange,
    isOpen,
    onClose,
}: {
    activeTab: string;
    onTabChange: (id: string) => void;
    isOpen: boolean;
    onClose: () => void;
}) {
    const navigationItems = [
        { id: 'home', icon: Home, label: 'ホーム' },
        { id: 'tests', icon: FileText, label: 'マイテスト' },
        { id: 'create', icon: PlusCircle, label: '新規作成' },
        { id: 'results', icon: BarChart3, label: '採点結果' },
        { id: 'community', icon: Users, label: 'コミュニティ' },
        { id: 'analytics', icon: TrendingUp, label: '分析' },
        { id: 'profile', icon: User, label: 'プロフィール' },
        { id: 'settings', icon: Settings, label: '設定' },
    ] as const;

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={onClose} />}
            <aside
                className={`fixed lg:static top-0 left-0 h-full bg-white border-r border-gray-200 w-64 z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
            >
                <div className="p-6 border-b border-gray-200 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <Button variant="ghost" size="sm" onClick={onClose}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <nav className="p-4">
                    <div className="space-y-1">
                        {navigationItems.map((item) => (
                            <NavigationItem
                                key={item.id}
                                icon={item.icon}
                                label={item.label}
                                active={activeTab === item.id}
                                onClick={() => {
                                    onTabChange(item.id);
                                    onClose();
                                }}
                            />
                        ))}
                    </div>
                </nav>
            </aside>
        </>
    );
}
