import classes from "./meals-loading.module.css";
import SkeletonCard from "../skeleton/skeleton-card";

export default function MealsLoading() {
  return (
    <div className={classes.meals}>
      <div>
        <SkeletonCard />
      </div>

      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
