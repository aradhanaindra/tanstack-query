'use client'
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";
import ProductList from "../components/product-list";

const TanStackOptimistic = () => {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["optimistic-products"],
    queryFn: async ({ signal }) => {
      const response: any = await fetch("http://localhost:3000/api/products/optimistic-update", { cache: "no-store", signal });
      const clone = await response.clone()
      const json = await clone.json()
      return json
    },
    select: (response) => {
      return response.products as Product[];
    },
  })

  return <ProductList
    title="TanStack Query"
    products={data}
    refetch={refetch}
    isFetching={isFetching}
    isLoading={isLoading} />
}

export default TanStackOptimistic;





