import db from '@/db/__mocks__/client';
import { createQuote, getQuotesWithAuthor } from '@/db/queries/quotes';
import { CreateQuotePayload } from '@/db/types';

vi.mock('@/db/client');

describe('Quotes API service', () => {
  describe('createQuote', () => {
    it('should create a new quote', async () => {
      const payload: CreateQuotePayload = {
        authorId: 1,
        category: 'music',
        content: 'Test',
      };

      const quote = {
        id: 1,
        createdAt: new Date(),
        published: true,
        updatedAt: null,
        ...payload,
      };

      db.quote.create.mockResolvedValue(quote);

      const result = await createQuote(payload);

      expect(db.quote.create).toHaveBeenCalled();
      expect(result).toEqual(quote);
    });
  });

  describe('getQuotesWithAuthor', () => {
    it('should return list of qoutes with author info', async () => {
      const quotes = [
        {
          authorId: 1,
          category: 'test',
          content: 'Test',
          createdAt: new Date(),
          id: 1,
          published: true,
          updatedAt: null,
        },
      ];

      db.quote.findMany.mockResolvedValue(quotes);

      const result = await getQuotesWithAuthor({
        pagination: {
          limit: 10,
          skip: 0,
        },
      });

      expect(result).toMatchObject(quotes);
      expect(db.quote.findMany).toHaveBeenCalledWith({
        include: {
          author: true,
        },
        skip: 0,
        take: 10,
      });
    });
  });
});
