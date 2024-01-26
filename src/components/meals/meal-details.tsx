import classes from "./meal-details.module.css";
import { getMealBySlug } from "../../../db/queries/meals";
import { notFound } from "next/navigation";
import Image from "next/image";

const MealDetails = async ({ slug }: { slug: string }) => {
  const meal = await getMealBySlug(slug);

  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator.email}`}>{meal.creator.name}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions?.replace(/\n/g, '<br/>'),
          }}
        ></p>
      </main>
    </>
  );
};
export default MealDetails;
