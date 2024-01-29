"use server";

export default async function createRecipe(formData: FormData) {
  const meal = {
    slug: "",
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
}
