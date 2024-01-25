import React from "react";
import { Skeleton } from "@nextui-org/react";
import classes from "./skeleton-card.module.css";
export default function SkeletonCard() {
  return (
    <div className={classes.card}>
      <div>
        <Skeleton className="rounded-lg">
          <div className="h-96" />
        </Skeleton>
      </div>
    </div>
  );
}
{
}
