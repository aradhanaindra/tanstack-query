'use client'
import { ArrowClockwise } from "@phosphor-icons/react"
import { cn } from "../lib/utils"
import ProductCard, { SkeletonProductCard } from "../components/ProductCard"
import { useEffect, useState } from "react";
import { getAllProducts, Product } from "../api/actions";

const Regular = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    const response: any = await fetch("http://localhost:3000/api");
    const products = (await response.clone().json()).products as Product[]
    setData(products);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

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
          <h1 className="text-4xl font-bold">Regular Fetch</h1>
          <button className={cn("rounded-full p-3 border border-neutral-800 hover:bg-neutral-800 transition-colors", isLoading && "animate-spin")} onClick={() => fetchData()}>
            <ArrowClockwise size={18} />
          </button>
        </div>
        {isLoading ? <p className="inline-block px-4 py-1 bg-purple-900 rounded-full">Fetching</p> : <p className="inline-block px-4 py-1 bg-green-900 rounded-full">Done</p>}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {Content()}
      </div>
    </div>
  );
}

export default Regular;