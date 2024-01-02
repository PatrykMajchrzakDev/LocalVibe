------------------------ What i learnt ------------------------

======================== Prisma ========================

1. npx prisma db push and pull commands
2. Be careful with db push cause it might delete stuff if used not carefully
3. Use migration to make sure that models / schemas matches well
   npx prisma migrate dev --name migrationName
   The above will initiate new migration creation (dev prop is migration creation) with name "migrationName"
4. Changing name of table will result in dropping that table which results in losing data. A workaround is to change the model,
   run "npx prisma migrate dev --create-only" which will create new migration file and then change the sql command to e.g "ALTER TABLE "OldName" RENAME TO "NewName";",
   and only then run "npx prisma migrate dev"
5. How to seed dummy data to db via prisma/seeds and setting up command in package.json with using TypeScript exec ts-node
