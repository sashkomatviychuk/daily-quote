import clx from 'classnames';
import { IBM_Plex_Mono } from 'next/font/google';

const font = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: '300',
  style: 'italic',
  subsets: ['latin'],
});

export default function EmptyQuotes() {
  return <div className={clx('flex self-center pt-8', font.className)}>No quotes found for this category</div>;
}
