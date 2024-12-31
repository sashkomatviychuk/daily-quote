'use client';

import { useRouter } from 'next/navigation';

import Button from '../form/Button';

export default function CreateQuoteButton() {
  const router = useRouter();

  return <Button onClick={() => router.push('/create-quote')}>Create a quote</Button>;
}
