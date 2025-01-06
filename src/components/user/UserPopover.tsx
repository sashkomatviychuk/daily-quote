'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { signOutAction } from '@/actions/sign-out';

const UserPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleToggleOpen = () => setIsOpen((open) => !open);

  return (
    <div className="relative inline-block">
      <button
        onClick={handleToggleOpen}
        className="flex items-center justify-center w-9 h-9 border-2 rounded-full border-black dark:border-white"
      >
        <User />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded dark:bg-slate-950 dark:border-gray-700 shadow-lg z-10"
          onClick={handleClose}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li className="hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer">
              <Link className="px-4 py-2 inline-block w-full" href={'/profile'}>
                Profile
              </Link>
            </li>
            <li className="hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer">
              <button className="px-4 py-2 text-left w-full" onClick={signOutAction}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-0" onClick={handleClose} aria-hidden="true"></div>}
    </div>
  );
};

export default UserPopover;
