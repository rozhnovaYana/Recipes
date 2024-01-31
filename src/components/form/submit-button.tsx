"use client";
import { Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function Submit({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit">
      {pending ? <Spinner color="warning" size="sm" /> : text}
    </button>
  );
}
