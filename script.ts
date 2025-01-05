// import { type User } from '@prisma/client';

import db from '@/db/client';

async function main() {
  // await db.user.create({
  //   data: {
  //     email: 'user@email.com',
  //     isActive: true,
  //     password: '123',
  //     name: 'John A. Doe',
  //   },
  // });

  const users = await db.user.findMany();
  console.log(users);

  // await db.quote.create({
  //   data: {
  //     category: 'places',
  //     content: 'Alway try to find you own place on this Planet',
  //     authorId: 1,
  //   },
  // });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
