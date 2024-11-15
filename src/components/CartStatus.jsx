import { useQuery } from "@tanstack/react-query";
import { IoCartOutline } from "react-icons/io5";
import { getCarts } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCarts(uid),
  });
  return (
    <div className="relative">
      <IoCartOutline className="text-4xl" />
      <p className="absolute w-6 h-6 text-center bg-main text-white font-bold rounded-full -top-1 -right-2">
        {products && products.length}
      </p>
    </div>
  );
}
