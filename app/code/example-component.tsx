import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/product-card";

const ExampleComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await fetchProducts();
      return products
    }
  })
  return (
    <div>
      {data.map((product) => <ProductCard product={product} />)}
    </div>
  );
}

export default ExampleComponent;