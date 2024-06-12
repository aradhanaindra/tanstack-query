import { ArrowClockwise } from "@phosphor-icons/react";
import { Category } from "../types";
import { cn } from "../lib/utils";
import CategoryCard, { SkeletonCategoryCard } from "./category-card";
import FetchStatus from "./fetch-status";

type CategoryListProps = {
  title: string;
  isFetching?: boolean;
  isLoading?: boolean;
  categories: Category[] | null | undefined;
  refetch?: () => void;
}

const CategoryList = ({ title, isLoading, isFetching, categories, refetch }: CategoryListProps) => {
  const handleRefetch = () => {
    if (refetch) refetch();
  }

  const Content = () => {
    if (isLoading) {
      return <CategoryListLoading />
    }
    if(!categories || categories.length == 0){
      return <p>No Categories</p>
    }
    return <CategoryListContent categories={categories}/>
  }

  return (
    <div className="my-4 space-y-4 text-white">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button className={cn("rounded-full p-2 border border-neutral-800 hover:bg-neutral-800 transition-colors", isFetching && "animate-spin")} onClick={() => handleRefetch()}>
            <ArrowClockwise />
          </button>
        </div>
        <FetchStatus isFetching={isFetching}/>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <Content />
      </div>
    </div>
  );
}

const CategoryListLoading = () => (
  <>
    {Array.from({ length: 6 }).map(
      (_, index) => <SkeletonCategoryCard key={index} />
    )}
  </>
)

const CategoryListContent = ({ categories }: { categories: Category[] }) => categories?.map((category, index) => <CategoryCard key={index} category={category} />)


export default CategoryList;