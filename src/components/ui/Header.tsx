import { PropsWithChildren } from 'react';

export default function Header({ children }: PropsWithChildren) {
  return <header className="flex w-full py-4 justify-between">{children}</header>;
}
