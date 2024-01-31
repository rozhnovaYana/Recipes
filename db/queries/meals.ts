import { type Meal } from "@prisma/client";
import db from "../../prisma/seed";

export const getMeals = async () => db.meal.findMany();

export const getMealBySlug = async (slug: string) =>
  db.meal.findFirst({
    where: {
      slug,
    },
  });
