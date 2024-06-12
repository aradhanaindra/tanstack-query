'use client'
import { Product } from "@/app/types";
import { useQuery } from "@tanstack/react-query";

const Parallel = () => {
  const { data: categories, isLoading: categoriesIsLoading, error: categoriesError, isFetching: isFetchingCategories, refetch: refetchCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response: any = await fetch("http://localhost:3000/api/categories");
      return (await response.clone().json()).categories as Product[];
    }
  })

  const { data: products, isLoading: productsIsLoading, error: productsError, isFetching: isFetchingProducts, refetch: refetchProducts } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response: any = await fetch("http://localhost:3000/api/products");
      return (await response.clone().json()).products as Product[];
    }
  })

  
  return (
    <div>

    </div>
  );
}

export default Parallel;