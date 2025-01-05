'use client';

import { signIn } from '@/actions/sign-in';

export default function SignInButton() {
  return (
    <form action={signIn}>
      <button className="py-1 px-2 rounded border dark:border-white">Sign In</button>
    </form>
  );
}
