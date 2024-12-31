'use server';

import { Quote } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { createQuote as createQuoteDb } from '@/db/queries/quotes';

const createQuoteSchema = z.object({
  category: z.enum(['people', 'places', 'life', 'wisdom'], { message: 'Please select quote category' }),
  content: z.string().min(20, 'Looks like quote text should not be short'),
});

const DEFAULT_AUTHOR_ID = 1;

interface CreateQuoteFormState {
  errors: {
    category?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createQuote(formState: CreateQuoteFormState, formData: FormData): Promise<CreateQuoteFormState> {
  const result = createQuoteSchema.safeParse({
    category: formData.get('category'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let quote: Quote;

  try {
    quote = await createQuoteDb({
      ...result.data,
      authorId: DEFAULT_AUTHOR_ID,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Failed to create quote'],
        },
      };
    }
  }

  if (quote) {
    revalidatePath('/');
    return redirect(`/`);
  }

  return {
    errors: {},
  };
}
