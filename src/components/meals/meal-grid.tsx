
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
import { type Meal } from "@prisma/client";
type MealGridProps = {
  fetchData: () => Promise<Meal[]>;
};
export default async function MealsGrid({ fetchData }: MealGridProps) {
  const meals = await fetchData();
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
