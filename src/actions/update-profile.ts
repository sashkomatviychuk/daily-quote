'use server';

import { z } from 'zod';

import { auth } from '@/auth';
import db from '@/db/client';

interface UpdateProfileFormState {
  errors: string[];
}

const updateProfileSchema = z.object({
  name: z.string({ message: 'User name is a required field' }).min(1, 'Provide longer user name'),
  email: z.string().email('Provide valid user email'),
});

export async function updateProfile(
  formState: UpdateProfileFormState,
  formData: FormData
): Promise<UpdateProfileFormState> {
  const result = updateProfileSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  const session = await auth();

  if (!session?.user?.id) {
    return {
      errors: ['Can not update user profile'],
    };
  }

  if (!result.success) {
    const err = result.error.flatten();

    return {
      errors: err.fieldErrors.name ?? err.fieldErrors.email ?? [],
    };
  }

  try {
    await db.user.update({
      data: result.data,
      where: {
        id: session.user.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: [err.message],
      };
    } else {
      return {
        errors: ['Failed to update user profile'],
      };
    }
  }

  return {
    errors: [],
  };
}
