// app/user/page.tsx
import UserLayout from '../../components/layouts/UserLayout';
import UserDashboard from '../../components/UserDashboard';

export default function UserDashboardPage() {
  return (
    <UserLayout>
      <UserDashboard />
    </UserLayout>
  );
}
