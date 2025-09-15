'use server';

import { createClient } from '@/utils/supabase/server';

export type AppUser = {
    id: string;
    email: string | null;
    name: string | null;
    avatar: string | null;
};

export async function getUser(): Promise<AppUser | null> {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) return null;

    const user = data.user;
    const name =
        (user.user_metadata?.name as string | undefined) ??
        (user.user_metadata?.full_name as string | undefined) ??
        null;
    const avatar =
        (user.user_metadata?.avatar_url as string | undefined) ??
        (user.user_metadata?.picture as string | undefined) ??
        null;

    return {
        id: user.id,
        email: user.email ?? null,
        name,
        avatar,
    };
}
