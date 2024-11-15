import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import useCarts from "../hooks/useCarts";

const ICON_STYLE_CLASS =
  "transition-all cursor-pointer hover:text-main hover:scale-105 mx-1";
export default function CartItem({ product }) {
  const { addCartItem, deleteCartItem } = useCarts();
  const handleMinusItem = () => {
    if (product.quantity < 2) return;
    addCartItem.mutate({
      product: { ...product, quantity: product.quantity - 1 },
    });
  };
  const handlePlusItem = () =>
    addCartItem.mutate({
      product: { ...product, quantity: product.quantity + 1 },
    });
  const handleDeleteItem = () => deleteCartItem.mutate({ product });
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
