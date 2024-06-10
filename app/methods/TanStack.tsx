'use client'
import { useQuery } from "@tanstack/react-query";
import ProductCard, { SkeletonProductCard } from "../components/ProductCard";
import { ArrowClockwise } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import { Product } from "../api/actions";

const TanStack = () => {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response: any = await fetch("http://localhost:3000/api");
      return (await response.clone().json()).products as Product[];
    }
  })

  const Content = () => {
    if (isLoading) {
      return (
        <>
          {Array.from({ length: 12 }).map(
            (_, index) => <SkeletonProductCard key={index} />
          )}
        </>
      )
    }
    if (error) {
      return <p className="px-3 py-2 rounded-full bg-red-600 text-white">Error!</p>
    }
    return data?.map((product, index) => <ProductCard key={index} product={product} />)
  }

  return (
    <div className="h-full px-8 space-y-8 text-white">
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-4xl font-bold">Using Tanstack Query</h1>
          <button className={cn("rounded-full p-3 border border-neutral-800 hover:bg-neutral-800 transition-colors", isFetching && "animate-spin")} onClick={() => refetch()}>
            <ArrowClockwise size={18} />
          </button>
        </div>
        {isFetching ? <p className="inline-block px-4 py-1 bg-purple-900 rounded-full">Fetching</p> : <p className="inline-block px-4 py-1 bg-green-900 rounded-full">Done</p>}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {Content()}
      </div>
    </div>
  );
}

export default TanStack;