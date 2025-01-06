import Header from '@/components/ui/Header';
import Logo from '@/components/ui/Logo';
import ThemeToggler from '@/components/ui/ThemeToggler';
import Profile from '@/components/user/Profile';
import SignInIndicator from '@/components/user/SignInIndicator';

export default async function ProfilePage() {
  return (
    <>
      <Header>
        <Logo />
        <div className="flex gap-4">
          <SignInIndicator />
          <ThemeToggler />
        </div>
      </Header>
      <Profile />
    </>
  );
}
