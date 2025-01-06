import { redirect, RedirectType } from 'next/navigation';

import { auth } from '@/auth';

import ProfileForm from './ProfileForm';

export default async function Profile() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/', RedirectType.replace);
  }

  return (
    <div className="py-4">
      <div className=" flex flex-col items-center">
        <h1 className="text-2xl">User profile</h1>
        <ProfileForm email={session.user.email ?? ''} name={session.user.name ?? ''} />
      </div>
    </div>
  );
}
