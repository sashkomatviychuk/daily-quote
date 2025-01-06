import clx from 'classnames';

import LeadingQuote from './LeadingQuote';
import LikeButton from './LikeButton';

interface QuoteCardProps {
  id: string;
  text: string;
  category: string;
  author?: string | null;
  likes?: number;
  liked?: boolean;
  className?: string;
}

export default function QuoteCard({ id, category, text, author, likes, liked, className }: QuoteCardProps) {
  return (
    <div
      className={clx(
        'p-4 px-2 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded flex items-center gap-2',
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <LikeButton quoteId={id} liked={liked} likes={likes} />
      </div>
      <div>
        <LeadingQuote className="text-base leading-6">{text}</LeadingQuote>
        {author && <div className="text-gray-500 text-sm font-bold mb-4">- {author}</div>}
        <span className="bg-green-600 text-xs text-white py-1 px-2 rounded">{category}</span>
      </div>
    </div>
  );
}
