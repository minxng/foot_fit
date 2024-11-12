import React, { useEffect, useState } from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

export default function AllProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </ul>
  );
}
