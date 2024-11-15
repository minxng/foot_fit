import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import Button from "../components/common/Button";
import PriceCard from "../components/PriceCard";
import { FaPlus, FaEquals } from "react-icons/fa";

const SHIPPING_FEE = 3000;
export default function Cart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCarts(uid),
  });
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  const handleOnClick = () => {};
  if (isLoading) return <p>Loading...~</p>;
  return (
    <section className="p-8 flex flex-col">
      <h3 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        장바구니
      </h3>
      {products && !products.length && <p>장바구니가 비어있습니다.</p>}
      <ul className="border-b border-gray-300 mb-8 p-4 px-8">
        {products &&
          products.map((product) => (
            <CartItem key={product.id} product={product} uid={uid} />
          ))}
      </ul>
      <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
        <PriceCard text="상품 총액" price={totalPrice} />
        <FaPlus className="shrink-0" />
        <PriceCard text="배송액" price={SHIPPING_FEE} />
        <FaEquals className="shrink-0" />
        <PriceCard text="총 가격" price={totalPrice + SHIPPING_FEE} />
      </div>
      <Button text="주문하기" onClick={handleOnClick} />
    </section>
  );
}
