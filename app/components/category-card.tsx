import { Category } from "../types";

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="flex items-center h-10 px-4 text-sm text-white border rounded-full border-neutral-800">
      <p>
        {category}
      </p>
    </div>
  );
}

export const SkeletonCategoryCard = () => {
  return <div className="w-full h-10 rounded-full animate-pulse bg-neutral-800">
  </div>
}

export default CategoryCard;