import Image from "next/image";
import { formatRupiah } from "../lib/currency";

type Product = {
  name: string,
  price: number,
  imageURL: string,
  category: string
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex gap-4 overflow-hidden rounded-lg bg-neutral-800 w-[400px]">
      <Image src={`${product.imageURL}`} alt={product.name} height={100} width={100} objectFit="cover" />
      <div className="p-4">
        <p>{product.name}</p>
        <p className="text-sm text-neutral-500">{product.category}</p>
        <p className="mt-2">{formatRupiah(product.price)}</p>
      </div>
    </div>
  );
}

export const SkeletonProductCard = () => {
  return <div className="rounded-lg animate-pulse h-[100px] bg-neutral-800 w-[400px]">
    <div className="h-[100px] w-[100px]" />
    <div className="p-4">
      <p></p>
      <p className="text-sm text-neutral-500"></p>
      <p className="mt-2"></p>
    </div>
  </div>
}

export default ProductCard;