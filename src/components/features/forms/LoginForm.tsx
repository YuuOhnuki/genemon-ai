import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login, signup } from '@/app/login/actions';

const LoginForm = () => {
    return (
        <form className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" name="email" type="email" required placeholder="メールアドレスを入力してください" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">パスワード</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="パスワードを入力してください"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <Button type="submit" className="w-full" formAction={login}>
                    ログイン
                </Button>
                <Button type="submit" className="w-full" formAction={signup}>
                    新規登録
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
