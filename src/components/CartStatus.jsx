import { LiaShoppingBagSolid } from "react-icons/lia";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartsQuery: { data: products },
  } = useCarts();
  return (
    <div className="relative right-2">
      <LiaShoppingBagSolid className="text-4xl" />
      <p className="absolute w-6 h-6 text-center bg-main text-white font-medium rounded-full -top-1 -right-2">
        {products && products.length}
      </p>
    </div>
  );
}
