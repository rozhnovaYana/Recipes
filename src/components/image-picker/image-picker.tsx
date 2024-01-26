"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const imagePicker = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>();
  const onButtonClick = () => {
    imagePicker?.current?.click();
  };
  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files?.[0];
    if (!files) {
      setImage("");
      return;
    }
    setImage(URL.createObjectURL(files));
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>No image picked yet.</p>}
          {image && (
            <Image src={image} alt="The image selected by the user." fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/*"
          name={name}
          ref={imagePicker}
          onChange={onInputChangeHandler}
        />
        <button
          className={classes.button}
          type="button"
          onClick={onButtonClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
