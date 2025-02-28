'use client'
import CategoryList from "@/app/components/category-list";
import ProductList from "@/app/components/product-list";
import { Category, Product } from "@/app/types";
import { Lightning } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

const Parallel = () => {
  const { data: categories, isLoading: categoriesIsLoading, error: categoriesError, isFetching: categoriesIsFetching, refetch: refetchCategories } = useQuery({
    queryKey: ["categories_parallel"],
    queryFn: async () => {
      const response: any = await fetch("http://localhost:3000/api/categories");
      return (await response.clone().json()).categories as Category[];
    }
  })

  const { data: products, isLoading: productsIsLoading, error: productsError, isFetching: productsIsFetching, refetch: refetchProducts } = useQuery({
    queryKey: ["products_parallel"],
    queryFn: async () => {
      const response: any = await fetch("http://localhost:3000/api/products");
      return (await response.clone().json()).products as Product[];
    }
  })

  return (
    <div className="flex-1 border rounded-xl border-neutral-800">
      <div className="flex items-center gap-4 px-4 py-2 border-b border-neutral-800">
        <Lightning weight="fill" className="text-purple-700" />
        <h1 className="text-white">Parallel Queries</h1>
      </div>
      <div className="px-4">
        <CategoryList
          title="Categories"
          categories={categories}
          refetch={refetchCategories}
          isFetching={categoriesIsFetching}
          isLoading={categoriesIsLoading}
        />
        <ProductList
          title="Products"
          products={products}
          refetch={refetchProducts}
          isFetching={productsIsFetching}
          isLoading={productsIsLoading} />
      </div>
    </div>
  );
}

export default Parallel;