'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

import { updateLikesCount } from '@/db/queries/quotes';

interface ToggleLikeArgs {
  quoteId: number;
  currentLikes: number;
}

export default async function toggleLike({
  quoteId,
  currentLikes,
}: ToggleLikeArgs): Promise<{ liked: boolean; likes: number }> {
  const cookieId = `q-like-${quoteId}`;

  const cookie = await cookies();

  const hasLike = !!cookie.get(cookieId)?.value;

  if (hasLike) {
    cookie.delete(cookieId);
  } else {
    cookie.set(cookieId, '1', { maxAge: 3600 });
  }

  const { likes } = await updateLikesCount(quoteId, hasLike ? currentLikes - 1 : currentLikes + 1);

  revalidatePath('/');

  return {
    liked: !hasLike,
    likes,
  };
}
