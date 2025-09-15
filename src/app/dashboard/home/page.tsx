import DashboardLayout from '@/components/dashboard/organisms/DashboardLayout';
import { UserProvider } from '@/components/providers/UserProvider';
import { getUser } from '@/utils/user/server';

export default async function Page() {
    const user = await getUser();
    return (
        <UserProvider user={user}>
            <DashboardLayout />
        </UserProvider>
    );
}
