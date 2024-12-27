import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { img, title, price } = product;
  return (
    <li
      onClick={() => navigate(`/products/${product.id}`, { state: product })}
      className="rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <div>
        <img className="w-full h-full	object-cover" src={img} alt="상품 사진" />
      </div>
      <div className="mt-2 px-2 text-lg">
        <h3 className="mb-2">{title}</h3>
        <p className="text-base">{price.toLocaleString()}원</p>
      </div>
    </li>
  );
}
