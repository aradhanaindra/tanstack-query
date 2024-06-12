'use client'
import { ArrowClockwise } from "@phosphor-icons/react"
import { cn } from "../lib/utils"
import ProductCard, { SkeletonProductCard } from "../components/product-card"
import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductList from "../components/product-list";

const Regular = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    const response: any = await fetch("http://localhost:3000/api/products");
    const products = (await response.clone().json()).products as Product[]
    setData(products);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return <ProductList title="Regular Fetch" products={data} refetch={fetchData} isFetching={isLoading} isLoading={isLoading} />
}

export default Regular;