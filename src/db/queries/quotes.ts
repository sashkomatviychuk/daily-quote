import { Quote, User } from '@prisma/client';
import { unstable_cache } from 'next/cache';

import db from '@/db/client';

import type { CreateQuotePayload, QuoteDbSelector, QuoteWithAuthor } from '../types';

export const getQuotesWithAuthor = unstable_cache(
  async ({ pagination, category }: QuoteDbSelector): Promise<QuoteWithAuthor[]> => {
    const result = await db.quote.findMany({
      where: {
        category,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: true,
      },
      skip: pagination.skip,
      take: pagination.limit,
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 300);
    });
  },
  ['quotes'],
  { revalidate: 60 }
);

export const updateLikesCount = async (quoteId: number, likesCount: number): Promise<Quote> => {
  return await db.quote.update({
    where: {
      id: quoteId,
    },
    data: {
      likes: likesCount,
    },
  });
};

export const createQuote = async (payload: CreateQuotePayload): Promise<Quote> => {
  const quote = await db.quote.create({
    data: payload,
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve(quote), 300);
  });
};

export const getUser = async (id: number): Promise<User | null> => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};
