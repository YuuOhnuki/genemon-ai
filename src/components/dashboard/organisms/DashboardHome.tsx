'use client';

import { FileText, Users, Award, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatCard } from '../atoms/StatCard';
import { TestCard } from '../atoms/TestCard';

export function DashboardHome() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">ダッシュボード</h1>
                <p className="text-gray-600">テストの作成・管理・分析を行いましょう</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={FileText} title="作成済みテスト" value="12" change="+2 今月" color="blue" />
                <StatCard icon={Users} title="総受験者数" value="248" change="+15 今週" color="green" />
                <StatCard icon={Award} title="平均スコア" value="78.5%" change="+5.2% 向上" color="purple" />
                <StatCard icon={MessageSquare} title="コミュニティ投稿" value="5" change="+1 今日" color="orange" />
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">最近のテスト</h2>
                    <Button variant="outline" size="sm">
                        すべて見る
                    </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <TestCard
                        title="JavaScript基礎テスト"
                        questions={20}
                        participants={45}
                        category="プログラミング"
                        difficulty="初級"
                        createdAt="2日前"
                    />
                    <TestCard
                        title="React Hook完全マスター"
                        questions={15}
                        participants={28}
                        category="フロントエンド"
                        difficulty="中級"
                        createdAt="1週間前"
                    />
                </div>
            </div>
        </div>
    );
}
