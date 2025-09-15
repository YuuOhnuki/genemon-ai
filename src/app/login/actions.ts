'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    console.log(data.email, data.password);

    const { error } = await supabase.auth.signInWithPassword(data);

    console.log(error);

    if (error) {
        redirect('/error');
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

export async function signup(formData: FormData) {
    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    console.log(data.email, data.password);

    const { error } = await supabase.auth.signUp(data);

    console.log(error);

    if (error) {
        redirect('/error');
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

// Googleログイン用のアクション
export async function signInWithGoogle() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        },
    });

    if (error) {
        console.error('Google login error:', error);
        redirect('/error');
    }

    if (data.url) {
        redirect(data.url);
    }
}
