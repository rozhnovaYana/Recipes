import db from "../../prisma/seed";

export const getMeals = async () => {
  return db.meal.findMany();
};
export const getMealBySlug = async (slug: string) => {
  return db.meal.findFirst({
    where: {
      slug,
    },
    include: {
      creator: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
};
