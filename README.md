# Vercel Postgres CRUD with Prisma

Case Study: Prisma ORM and Testing with Vercel Postgres Database

## Steps

1. Create a database in [Vercel](https://vercel.com/)
2. Start prisma with `npx prisma init` and get the connection strings and providers from Vercel to paste into `.env` and [schema.prisma](prisma/schema.prisma) files respectively
3. Create the models in [schema.prisma](prisma/schema.prisma) and run `npx prisma migrate dev --name init`
4. Generate the prisma client with `npx prisma generate` and then create the connection in `/lib/prisma.js`
5. Create the [routes](pages/api/) for the API using the connection
6. For better organization use [controllers](controllers/) to handle the manipulation of the data
7. If deploying to Vercel you need to specify `prisma generate` in the build process. This can be done in the deployment page or in the `package.json` file

## Tips with Prisma

- You can use `npx prisma db pull` to pull the database schema and automatically create your models in schema.prisma
- You can use `npx prisma studio` to open the prisma studio and see and edit the data in the database

## References

- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextJS with Prisma Example](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nextjs)
