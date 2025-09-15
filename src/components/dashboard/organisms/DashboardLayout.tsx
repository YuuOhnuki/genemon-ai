'use client';

import { useState } from 'react';
import { FileText } from 'lucide-react';
import { Header } from '../molecules/Header';
import { Sidebar } from '../molecules/Sidebar';
import { DashboardHome } from './DashboardHome';
import { TestsPage } from './TestsPage';
import { CreateTestPage } from './CreateTestPage';

export default function DashboardLayout() {
    const [activeTab, setActiveTab] = useState('home');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user] = useState<{ name: string; avatar: string | null }>({ name: '山田太郎', avatar: null });

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <DashboardHome />;
            case 'tests':
                return <TestsPage />;
            case 'create':
                return <CreateTestPage />;
            default:
                return (
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {activeTab === 'results' && '採点結果'}
                                {activeTab === 'community' && 'コミュニティ'}
                                {activeTab === 'analytics' && '分析'}
                                {activeTab === 'profile' && 'プロフィール'}
                                {activeTab === 'settings' && '設定'}
                            </h3>
                            <p className="text-gray-600">この機能は開発中です</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-50">
            <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} user={user} />
            <div className="flex">
                <Sidebar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
                <main className="flex-1 p-6 lg:p-8">{renderContent()}</main>
            </div>
        </div>
    );
}
