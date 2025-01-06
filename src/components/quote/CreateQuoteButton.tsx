import Link from 'next/link';

import { auth } from '@/auth';

export default async function CreateQuoteButton() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  return (
    <Link
      className="mb-6 inline-block py-2 px-4 text-sm bg-green-600 text-white rounded-md hover:bg-green-800 transition duration-300 tracking-wide"
      href={'/create-quote'}
    >
      Create a quote
    </Link>
  );
}
