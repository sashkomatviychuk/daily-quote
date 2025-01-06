'use client';

import { useActionState } from 'react';

import { updateProfile } from '@/actions/update-profile';

import Button from '../form/Button';

interface ProfileFormProps {
  name: string;
  email: string;
}

export default function ProfileForm({ email, name }: ProfileFormProps) {
  const [formState, action, isPending] = useActionState(updateProfile, {
    errors: [],
  });

  const { errors } = formState;
  const hasErrors = !!errors.length;

  return (
    <form className="w-full md:w-1/2" action={action}>
      <div className="flex flex-col  justify-center">
        {hasErrors && <div className="p-2 mt-4 text-sm bg-red-500 rounded">{errors.join('\n')}</div>}
        <div className="py-4 pt-2 text-sm flex flex-col w-full">
          <label className="py-2" htmlFor="name">
            User name
          </label>
          <input id="name" name="name" className="border rounded p-2" type="text" defaultValue={name} />
        </div>
        <div className="text-sm flex flex-col w-full">
          <label className="py-2" htmlFor="email">
            User email
          </label>
          <input id="email" name="email" className="border rounded p-2" type="text" defaultValue={email} />
        </div>
        <div className="py-6 text-sm flex flex-col">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Updating..' : 'Update'}
          </Button>
        </div>
      </div>
    </form>
  );
}
