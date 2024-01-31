"use client";
import ImagePicker from "@/components/image-picker/image-picker";
import classes from "./page.module.css";
import createRecipe from "@/actions/create-recipe";
import Submit from "@/components/form/submit-button";
import { useState } from "react";
import { useFormState } from "react-dom";
import { error } from "console";
import { Input, Textarea } from "@nextui-org/react";
import FormInput from "@/components/form/input";

export default function ShareMealPage() {
  const [{ errors }, formAction] = useFormState(createRecipe, {
    errors: {},
  });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <FormInput
              label="Your name"
              isInvalid={!!errors.creator}
              name="name"
              errorMessage={errors?.creator?.join(", ")}
            />

            <FormInput
              label="Your email"
              isInvalid={!!errors.creator_email}
              name="email"
              errorMessage={errors?.creator_email?.join(", ")}
            />
          </div>

          <FormInput
            label="Title"
            isInvalid={!!errors.title}
            name="title"
            errorMessage={errors?.title?.join(", ")}
          />

          <FormInput
            label="Short Summary"
            isInvalid={!!errors.summary}
            name="summary"
            errorMessage={errors?.summary?.join(", ")}
          />
          <div className="mt-5">
            <Textarea
              isRequired
              variant="bordered"
              labelPlacement="outside"
              label="instructions"
              isInvalid={!!errors.instructions}
              id="instructions"
              name="instructions"
              rows={10}
              required
              errorMessage={errors?.instructions?.join(", ")}
            />
          </div>

          <ImagePicker name="image" label="Select Image" />
          <p className={classes.actions}>
            <Submit text="Create" />
          </p>
        </form>
        {errors._form && (
          <div className="p-2 rounded bg-red-200"> {errors._form}</div>
        )}
      </main>
    </>
  );
}
