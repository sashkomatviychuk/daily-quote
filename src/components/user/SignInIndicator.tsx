import { auth } from '@/auth';

import SignInButton from './SignInButton';
import UserPopover from './UserPopover';

export default async function SignInIndicator() {
  const session = await auth();

  if (session?.user) {
    return <UserPopover />;
  }

  return <SignInButton />;
}

// Example: https://github.com/nextauthjs/next-auth-example
