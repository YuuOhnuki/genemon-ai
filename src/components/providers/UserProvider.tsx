'use client';

import { createContext, useContext, useMemo } from 'react';
import type { AppUser } from '@/utils/user/server';

type UserContextValue = {
    user: AppUser | null;
};

const UserContext = createContext<UserContextValue>({ user: null });

export function UserProvider({ user, children }: { user: AppUser | null; children: React.ReactNode }) {
    const value = useMemo(() => ({ user }), [user]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
    return useContext(UserContext).user;
}
