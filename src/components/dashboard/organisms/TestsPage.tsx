'use client';

import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TestCard } from '../atoms/TestCard';

export function TestsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">マイテスト</h1>
                <Button>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    新規作成
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                <TestCard
                    title="データ構造とアルゴリズム"
                    questions={25}
                    participants={67}
                    category="コンピュータサイエンス"
                    difficulty="上級"
                    createdAt="3日前"
                />
            </div>
        </div>
    );
}
