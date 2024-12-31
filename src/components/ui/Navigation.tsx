'use client';

import clx from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const categories = [
  { name: 'People', slug: 'people' },
  { name: 'Places', slug: 'places' },
  { name: 'Life', slug: 'life' },
  { name: 'Wisdom', slug: 'wisdom' },
];

export default function Navigation() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category');

  return (
    <nav className="relative flex space-x-8 justify-center w-full ">
      <Link
        key={'latest'}
        href={`/`}
        className={clx(`relative font-medium text-gray-800 dark:text-white transition`, {
          'text-green-600': !activeCategory,
        })}
      >
        Latest
        {!activeCategory && (
          <span
            className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 transition-all duration-300"
            style={{
              transform: 'translateY(100%)',
            }}
          />
        )}
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/?category=${category.slug}`}
          className={clx(`relative font-medium text-gray-800 dark:text-white transition`, {
            'text-green-600': activeCategory === category.slug,
          })}
        >
          {category.name}
          {activeCategory === category.slug && (
            <span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 transition-all duration-300"
              style={{
                transform: 'translateY(100%)',
              }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
