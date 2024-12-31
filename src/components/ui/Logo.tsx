import { Playwrite_CU } from 'next/font/google';
import Link from 'next/link';

const playwrite = Playwrite_CU({
  variable: '--font-playwrite-cu',
});

export default function Logo() {
  return (
    <Link href={'/'} className={`flex ${playwrite.className}`}>
      <span className="text-green-500 text-3xl decoration-8">Daily</span>
      <span className={`text-3xl font-bold`}>Quote</span>
    </Link>
  );
}
