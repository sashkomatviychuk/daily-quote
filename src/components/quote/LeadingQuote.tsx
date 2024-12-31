import clx from 'classnames';
import { IBM_Plex_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';

const font = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: '300',
  style: 'italic',
  subsets: ['latin'],
});

interface LeadingQuoteProps {
  className?: string;
}

export default function LeadingQuote({ children, className }: PropsWithChildren<LeadingQuoteProps>) {
  return (
    <div className={clx(font.className, 'text-gray-500 py-4 pb-4', className)}>
      {'"'}
      {children}
      {'"'}
    </div>
  );
}
