import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { id, img, title, price, category } = product;
  const handleProductDetail = (product) => {
    console.log(product, "product");
    navigate(`/products/${product.id}`, { state: product });
  };
  return (
    <li
      onClick={() => handleProductDetail(product)}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img className="w-full h-full	object-cover" src={img} alt="상품 사진" />
      </div>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{price}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
