'use client';

import clx from 'classnames';
import { Heart } from 'lucide-react';
import { useState, useTransition } from 'react';

import toggleLike from '@/actions/toggleLike';

interface LikeButtonProps {
  quoteId: string;
  liked?: boolean;
  likes?: number;
}

export default function LikeButton({ likes = 0, liked, quoteId }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);
  const [isPending, startTransition] = useTransition();

  const handleClick = () =>
    startTransition(async () => {
      const { liked, likes } = await toggleLike({
        currentLikes: likesCount,
        quoteId: +quoteId,
      });

      setIsLiked(liked);
      setLikesCount(likes);
    });

  return (
    <>
      <Heart
        className={clx('cursor-pointer', {
          'fill-green-600 stroke-green-600 hover:fill-green-700 hover:stroke-green-700': !isLiked,
          'fill-green-700 stroke-green-700': isLiked,
          'animate-spin': isPending,
        })}
        stroke=""
        width={20}
        height={20}
        onClick={handleClick}
      />
      <span className={clx('text-sm text-gray-500', { 'font-medium': !liked, 'font-bold': liked })}>{likesCount}</span>
    </>
  );
}
