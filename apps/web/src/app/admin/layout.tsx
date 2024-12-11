import { getCurrentUser } from '@/modules/auth/api/get-current-user';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user.isAdmin) {
    redirect('/');
  }

  return children;
}
