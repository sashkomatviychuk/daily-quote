import { Quote, User } from '@prisma/client';

export type Pagination = {
  skip: number;
  limit: number;
};

export type QuoteDbSelector = {
  category?: string;
  pagination: Pagination;
};

export type QuoteWithAuthor = {
  author: User;
} & Quote;

export type CreateQuotePayload = Required<Pick<Quote, 'authorId' | 'category' | 'content'>>;
