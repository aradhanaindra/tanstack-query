import { useQuery } from "@tanstack/react-query"
import { Product } from "../types"

export const useProductsQuery = (select: (data: Product[]) => unknown) => (
  useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Fetch data here...
      const response: any = await fetch("http://localhost:3000/api/products");
      const responseJSON = (await response.clone().json())
      return responseJSON;
    },
    select,
  })
)

export const useProductsCount = () =>
  useProductsQuery((data: Product[]) => data.length)

export const useProduct = (id: string) =>
  useProductsQuery((data: Product[]) => data.find((product) => product.id === id))