import { ArrowClockwise } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { Product } from "../types";
import ProductCard, { SkeletonProductCard } from "./product-card";
import FetchStatus from "./fetch-status";

type ProductListProps = {
  title: string;
  isFetching?: boolean;
  isLoading?: boolean;
  products: Product[] | null | undefined;
  refetch?: () => void;
}

const ProductList = ({ title, isLoading, isFetching, products, refetch }: ProductListProps) => {
  const handleRefetch = () => {
    if (refetch) refetch();
  }

  const Content = () => {
    if (isLoading) {
      return <ProductListLoading />
    }
    if(!products || products.length == 0){
      return <p>No Products</p>
    }
    return <ProductListContent products={products}/>
  }

  return (
    <div className="h-full space-y-4 text-white">
     <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button className={cn("rounded-full p-2 border border-neutral-800 hover:bg-neutral-800 transition-colors", isFetching && "animate-spin")} onClick={() => handleRefetch()}>
            <ArrowClockwise />
          </button>
        </div>
        <FetchStatus isFetching={isFetching}/>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Content />
      </div>
    </div>
  );
}

const ProductListLoading = () => (
  <>
    {Array.from({ length: 12 }).map(
      (_, index) => <SkeletonProductCard key={index} />
    )}
  </>
)

const ProductListContent = ({ products }: { products: Product[] }) => products?.map((product, index) => <ProductCard key={index} product={product} />)

export default ProductList;