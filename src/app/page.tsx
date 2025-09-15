'use client';

import Link from 'next/link';
import { Upload, Scan, MessageSquare, BarChart3, Shield, Zap } from 'lucide-react';
import Hero from '@/components/features/landing/Hero';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Hero />
            <Features />
            <Callout />
            <Footer />
        </div>
    );
}

function Features() {
    const features = [
        {
            icon: Upload,
            title: 'マルチ形式対応',
            description: 'テキスト、PDF、画像からの問題作成に対応。OCR機能で手書き資料からも抽出可能。',
        },
        {
            icon: Scan,
            title: 'OCR統合',
            description: 'Tesseract.js + 外部APIによる高精度テキスト抽出。手書きノートからも問題を生成。',
        },
        {
            icon: MessageSquare,
            title: '柔軟なAI統合',
            description: 'Hugging Face、Replicate、自己ホストに対応。複数AIプロバイダの切り替えが可能。',
        },
        {
            icon: BarChart3,
            title: '学習分析',
            description: '詳細な採点結果と学習進捗分析。弱点の可視化で効率的な復習をサポート。',
        },
        {
            icon: Shield,
            title: 'セキュリティ',
            description: 'JWT認証、ファイルスキャン、API キー管理で個人情報を安全に保護。',
        },
        {
            icon: Zap,
            title: '高速・軽量',
            description: 'Cloudflare基盤による高速動作。無料枠を最大限活用したコスト効率設計。',
        },
    ];

    return (
        <section id="features" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">充実した学習支援機能</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        AI技術と最新のクラウドインフラを組み合わせて、 効率的で楽しい学習体験を提供します
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 group"
                        >
                            <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                                <feature.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Callout() {
    return (
        <section className="mt-16 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">コスト効率を最重視</h3>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        Cloudflareの無料枠を最大限活用し、個人学習者でも気軽に始められる設計。
                        必要に応じて段階的に機能拡張が可能です。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">無料</div>
                            <div className="text-sm text-gray-600">基本機能</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">段階的</div>
                            <div className="text-sm text-gray-600">機能拡張</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">拡張可能</div>
                            <div className="text-sm text-gray-600">有料プラン</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="py-10 border-t bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} Genemon AI</p>
                <div className="flex gap-4 text-sm text-gray-600">
                    <Link href="/terms" className="hover:underline">
                        利用規約
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        プライバシー
                    </Link>
                </div>
            </div>
        </footer>
    );
}
