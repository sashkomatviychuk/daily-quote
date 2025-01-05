'use client';

import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { signOutAction } from '@/actions/sign-out';

const UserPopover: React.FC = () => {
  const router = useRouter();
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
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10"
          onClick={handleClose}
        >
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => router.push('/profile')}>
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={signOutAction}>
              Logout
            </li>
          </ul>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-0" onClick={handleClose} aria-hidden="true"></div>}
    </div>
  );
};

export default UserPopover;
