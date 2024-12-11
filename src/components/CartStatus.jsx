import { IoCartOutline } from "react-icons/io5";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartsQuery: { data: products },
  } = useCarts();
  return (
    <div className="relative">
      <IoCartOutline className="text-4xl" />
      <p className="absolute w-6 h-6 text-center bg-main text-white font-medium rounded-full -top-1 -right-2">
        {products && products.length}
      </p>
    </div>
  );
}
