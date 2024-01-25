import db from "../../prisma/seed";

export const getMeals = async () => {
  return db.meal.findMany();
};
