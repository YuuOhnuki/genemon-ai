'use client';

import { BookOpen, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CreateTestPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">新規テスト作成</h1>
                <p className="text-gray-600">AIを活用してテストを作成しましょう</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">テスト作成機能</h3>
                    <p className="text-gray-600 mb-6">この画面でAIを使ったテスト作成機能を実装予定</p>
                    <Button size="lg">
                        <PlusCircle className="w-5 h-5 mr-2" />
                        AI生成を開始
                    </Button>
                </div>
            </div>
        </div>
    );
}
