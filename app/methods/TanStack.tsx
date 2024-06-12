'use client'
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";
import ProductList from "../components/product-list";

const TanStack = () => {
  const { data: products, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response: any = await fetch("http://localhost:3000/api/products");
      const responseJSON = (await response.clone().json())
      return responseJSON.products as Product[];
    }
  })

  return <ProductList products={products} refetch={refetch} isFetching={isFetching} isLoading={isLoading} />
}

export default TanStack;