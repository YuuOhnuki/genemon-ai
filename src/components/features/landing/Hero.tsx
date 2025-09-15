import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Users, Target } from 'lucide-react';
import FeatureIcon from './FeatureIcon';
import LoginDialog from './LoginDialog';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        AI学習支援で
                        <span className="text-blue-600 block">効率的な学習を</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        生成AIを活用したテスト作成・自動採点・学習コミュニティで、
                        中学生から大学受験まで個人学習をサポートします
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <LoginDialog />
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                        >
                            <Link href="#features">デモを見る</Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        <FeatureIcon title="AI問題生成" description="テキストや画像から自動で問題を生成">
                            <Brain className="h-8 w-8 text-blue-600" />
                        </FeatureIcon>
                        <FeatureIcon title="自動採点" description="選択肢・記述・数式問題の自動採点">
                            <Target className="h-8 w-8 text-green-600" />
                        </FeatureIcon>
                        <FeatureIcon title="学習共有" description="作成したテストの共有とコミュニティ">
                            <Users className="h-8 w-8 text-purple-600" />
                        </FeatureIcon>
                        <FeatureIcon title="コスト最適化" description="無料から始められる段階的プラン">
                            <BookOpen className="h-8 w-8 text-orange-600" />
                        </FeatureIcon>
                    </div>
                </div>
            </div>
        </section>
    );
}
