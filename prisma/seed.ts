import { PrismaClient } from "@prisma/client";
import { initData } from "./initData";

const db = new PrismaClient();

async function main() {
  const responses = initData.map((item) =>
    db.meal.upsert({
      where: {
        slug: item.slug,
      },
      update: {},
      create: item,
    })
  );
  await Promise.all([...responses]);
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
