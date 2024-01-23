import { PrismaClient } from "@prisma/client";
import { initData } from "./initData";

const db = new PrismaClient();

async function main() {
  await db.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      meals: {
        create: [...initData],
      },
    },
  });
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

export default db;
