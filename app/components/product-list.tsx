import { ArrowClockwise } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { Product } from "../types";
import ProductCard, { SkeletonProductCard } from "./product-card";

type ProductListProps = {
  isFetching?: boolean;
  isLoading?: boolean;
  products: Product[] | null | undefined;
  refetch?: () => void;
}

const ProductList = ({ isLoading, isFetching, products, refetch }: ProductListProps) => {
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
    <div className="h-full px-8 space-y-8 text-white">
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-4xl font-bold">Using Tanstack Query</h1>
          <button className={cn("rounded-full p-3 border border-neutral-800 hover:bg-neutral-800 transition-colors", isFetching && "animate-spin")} onClick={() => handleRefetch()}>
            <ArrowClockwise size={18} />
          </button>
        </div>
        {isFetching ? <p className="inline-block px-4 py-1 bg-purple-900 rounded-full">Fetching</p> : <p className="inline-block px-4 py-1 bg-green-900 rounded-full">Done</p>}
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