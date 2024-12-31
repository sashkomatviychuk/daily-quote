import { cookies } from 'next/headers';

import { getQuotesWithAuthor } from '@/db/queries/quotes';

import EmptyQuotes from './EmptyQuotes';
import QuoteCard from './QuoteCard';

interface QuotesProps {
  category?: string;
}

export default async function Quotes({ category }: QuotesProps) {
  const quotes = await getQuotesWithAuthor({
    category,
    pagination: { limit: 10, skip: 0 },
  });

  const noQuotes = !quotes.length;
  const cookie = await cookies();

  return (
    <div className="flex flex-col w-full gap-4 mt-8 mx-4 flex-1 max-h-full overflow-y-auto">
      {noQuotes && <EmptyQuotes />}
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          id={'' + quote.id}
          category={quote.category}
          author={quote.author.name}
          text={quote.content}
          className="cursor-pointer bg-white hover:bg-gray-100"
          liked={!!cookie.get(`q-like-${quote.id}`)?.value}
          likes={quote.likes}
        />
      ))}
    </div>
  );
}
