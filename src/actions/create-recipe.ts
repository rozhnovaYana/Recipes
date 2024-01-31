"use server";
import xss from "xss";
import { z } from "zod";
import fs from "node:fs";
import db from "../../prisma/seed";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const schema = z.object({
  slug: z.string().min(3),
  title: z.string().min(3),
  image: z.string().min(3),
  summary: z.string().min(3),
  instructions: z.string().min(10),
  creator: z.string().min(3),
  creator_email: z.string().email().min(5),
});

interface CreateMealState {
  errors: {
    slug?: string[];
    title?: string[];
    image?: string[];
    summary?: string[];
    instructions?: string[];
    creator?: string[];
    creator_email?: string[];
    _form?: string;
  };
}

export default async function createRecipe(
  state: CreateMealState,
  formData: FormData
): Promise<CreateMealState> {
  const slug =
    formData.get("title")?.toString().toLowerCase().replace(/\W/g, "-") || "";
  // image uploading
  const image = formData.get("image");
  let filename;
  if (image instanceof File) {
    const extension = image?.name?.split(".")[1];
    filename = `${slug}.${extension}`;
    const stream = fs.createWriteStream(`public/assets/${filename}`);
    const buffer = await image.arrayBuffer();
    stream.write(Buffer.from(buffer));
  }
  const validData = schema.safeParse({
    slug,
    title: formData.get("title"),
    image: filename,
    summary: formData.get("summary"),
    instructions: xss(formData.get("instructions")?.toString() || ""),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  });
  if (!validData.success) {
    return {
      errors: validData.error.flatten().fieldErrors,
    };
  }
  try {
    await db.meal.create({
      data: {
        slug: validData.data.slug,
        title: validData.data.title,
        image: `/assets/${validData.data.image}`,
        summary: validData.data.summary,
        instructions: validData.data.summary,
        creator: validData.data.creator,
        creator_email: validData.data.creator_email,
      },
    });
  } catch (err: unknown) {
    const issues = err instanceof Error ? err.message : "Something went wrong";
    return {
      errors: {
        _form: issues,
      },
    };
  }
  revalidatePath("/meals");
  redirect("/meals");
}
