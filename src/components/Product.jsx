import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { id, img, title, price, category } = product;
  return (
    <li
      onClick={() => navigate(`/products/${product.id}`, { state: product })}
      className="rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img className="w-full h-full	object-cover" src={img} alt="상품 사진" />
      </div>
      <div className="mt-2 px-2 text-lg">
        <h3>{title}</h3>
        <p>{price.toLocaleString()}원</p>
      </div>
    </li>
  );
}
