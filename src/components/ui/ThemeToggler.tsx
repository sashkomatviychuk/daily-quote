'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}
      className="transition-all rounded-full border-2 border-black dark:border-white h-9 w-9 flex items-center justify-center"
    >
      <Moon className="stroke-0 fill-black inline dark:hidden" />
      <Sun className="stroke-1 hidden dark:inline" />
    </button>
  );
}

export default ThemeToggler;
