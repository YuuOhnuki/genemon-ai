import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import LoginForm from '../forms/LoginForm';
import GoogleLogin from '../forms/GoogleLogin';

export default function LoginDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    無料で始める
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <h1 className="text-2xl font-bold mb-6 text-center">ログイン</h1>
                    </DialogTitle>
                </DialogHeader>
                <LoginForm />
                <Separator />
                <GoogleLogin />
            </DialogContent>
        </Dialog>
    );
}
