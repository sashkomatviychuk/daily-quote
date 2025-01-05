'use client';

import clx from 'classnames';
import { X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useActionState } from 'react';

import { createQuote } from '@/actions/create-quote';

import Button from '../form/Button';

const categories = [
  { name: 'People', slug: 'people' },
  { name: 'Places', slug: 'places' },
  { name: 'Life', slug: 'life' },
  { name: 'Wisdom', slug: 'wisdom' },
];

export default function CreateQuoteModal() {
  const router = useRouter();
  const pathname = usePathname();

  const [formState, action, isPending] = useActionState(createQuote, {
    errors: {},
  });

  const categoryError = formState.errors.category?.at(0);
  const contentError = formState.errors.content?.at(0);

  // fixme: after redirect modal still shown
  if (pathname !== '/create-quote') {
    return null;
  }

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-lg rounded p-8 relative">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-xl dark:text-white font-bold">Create a new qoute</h4>
          <button onClick={() => router.back()}>
            <X className="dark:stroke-white dark:hover:stroke-slate-300 cursor-pointer -mr-1" />
          </button>
        </div>
        <div className="my-6"></div>
        <form action={action}>
          <div className="py-4 block w-full">
            <select
              id="category"
              name="category"
              className={clx(
                'appearance-none h-10 rounded outline-blue-600 w-full px-2 text-slate-700 dark:text-white bg-gray-100 dark:bg-gray-900',
                {
                  'border border-rose-600': categoryError,
                }
              )}
              defaultValue={''}
            >
              <option value="">Choose a category</option>
              {categories.map(({ name, slug }) => (
                <option value={slug} key={slug}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="py-4 block w-full">
            <textarea
              className={clx(
                'w-full p-2 text-slate-700 rounded outline-blue-600 dark:text-white bg-gray-100 dark:bg-gray-900',
                {
                  'border border-rose-600': contentError,
                }
              )}
              name="content"
              id="content"
              rows={6}
              placeholder="Enter the quote..."
            ></textarea>
          </div>
          <div className="py-2 block w-full">
            <Button className="disabled:opacity-70" type="submit" disabled={isPending}>
              {isPending ? 'Creating...' : 'Create a quote'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
