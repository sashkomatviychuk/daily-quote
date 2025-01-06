import clx from 'classnames';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Button({
  children,
  ...rest
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...rest}
      className={clx(
        'py-2 px-4 text-sm bg-green-600 text-white rounded-md hover:bg-green-800 transition duration-300 tracking-wide',
        roboto.className,
        rest.className
      )}
    >
      {children}
    </button>
  );
}
