# MERN-Based-Admin
MERN stack to generate basic code base for admin web sites

Admin base with authentication and validation for user

# Stack
* GrahQL
* React NextJS
* Node NestJS
* MySQL
* Prisma
* JWT
* Material UI
* Redux
* Zod

# Command Front
npx create-next-app@latest
npm run dev

# Command Back
npx @nestjs/cli new app-name
npm install prisma --save-dev
npm install @prisma/client
npx prisma init

*Add or modify data base
npx prisma migrate dev --name add_bio_field --create-only
npx prisma migrate dev
npx prisma generate