import clx from 'classnames';
import { Heart } from 'lucide-react';

import LeadingQuote from './LeadingQuote';

const QUOTE_CARD = {
  author: 'James Lee',
  text: 'Code is like humor. When you have to explain it, it’s bad',
  category: 'coding',
};

export default function QuoteSectionLeft() {
  return (
    <div
      className={clx(
        'p-4 px-2 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded flex items-center gap-2 hidden lg:flex'
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Heart
          className={clx('cursor-pointer fill-green-600 stroke-green-600 hover:fill-green-700 hover:stroke-green-700')}
          stroke=""
          width={20}
          height={20}
        />
      </div>
      <div>
        <LeadingQuote className="text-base leading-6">{QUOTE_CARD.text}</LeadingQuote>
        <div className="text-gray-500 text-sm font-bold mb-4">- {QUOTE_CARD.author}</div>
        <span className="bg-green-600 text-xs text-white py-1 px-2 rounded">{QUOTE_CARD.category}</span>
      </div>
    </div>
  );
}
