'use client'
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";
import ProductList from "../components/product-list";

const TanStack = () => {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // fetch data here...
      const response: any = await fetch("http://localhost:3000/api/products");
      const responseJSON = (await response.clone().json())
      return responseJSON;
    },
    select: (data) => data.products as Product[],
    refetchOnWindowFocus: false
  })

  return <ProductList
    title="TanStack Query"
    products={data}
    refetch={refetch}
    isFetching={isFetching}
    isLoading={isLoading}
    error={error!} />
}

export default TanStack;





