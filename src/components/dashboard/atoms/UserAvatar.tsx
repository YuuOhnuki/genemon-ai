import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import React from 'react';

const UserAvatar = ({ user }: { user?: { name?: string; avatar?: string | null; email: string | null } }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={user?.avatar ?? undefined} />
                    <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <h2 className="text-lg font-semibold">{user?.name ?? 'ユーザー'}</h2>
                <p>{user?.email}</p>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserAvatar;
