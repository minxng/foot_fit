import { useQueryClient } from "@tanstack/react-query";
import { addCart, deleteCartItem } from "../api/firebase";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const ICON_STYLE_CLASS =
  "transition-all cursor-pointer hover:text-main hover:scale-105 mx-1";
export default function CartItem({ product, uid }) {
  const queryClient = useQueryClient();
  const handleMinusItem = () => {
    if (product.quantity < 2) return;
    addCart(uid, { ...product, quantity: product.quantity - 1 }).then(() =>
      resetQuery()
    );
  };
  const handlePlusItem = () =>
    addCart(uid, { ...product, quantity: product.quantity + 1 }).then(() =>
      resetQuery()
    );
  const handleDeleteItem = () =>
    deleteCartItem(uid, product).then(() => resetQuery());
  const resetQuery = () =>
    queryClient.invalidateQueries({ queryKey: ["carts"] });
  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={product.img} alt="" />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{product.title}</p>
          <p className="text-xl font-bold text-main">{product.option}</p>
          <p>{product.price}</p>
        </div>
        <div className="flex items-center text-2xl">
          <CiSquareMinus
            className={ICON_STYLE_CLASS}
            onClick={handleMinusItem}
          />
          <span>{product.quantity}</span>
          <CiSquarePlus className={ICON_STYLE_CLASS} onClick={handlePlusItem} />
          <FaRegTrashAlt
            className={ICON_STYLE_CLASS}
            onClick={handleDeleteItem}
          />
        </div>
      </div>
    </li>
  );
}
