import clx from 'classnames';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400'],
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
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
