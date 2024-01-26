import MealDetails from "@/components/meals/meal-details";

const MealPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  return (
   <MealDetails slug={slug}/>
  );
};
export default MealPage;
