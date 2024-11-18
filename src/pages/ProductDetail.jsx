import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";
import useCarts from "../hooks/useCarts";
import CartConfirmModal from "../components/CartConfirmModal";

export default function ProductDetail() {
  const {
    state: { id, img, title, price, category, description, options },
  } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(options && options[0]);
  const { addCartItem } = useCarts();
  const handleClick = () => {
    addCartItem.mutate(
      {
        product: {
          id,
          img,
          title,
          price,
          option: selected,
          quantity: 1,
        },
      },
      {
        onSuccess: () => {
          setOpenModal(true);
        },
      }
    );
  };
  return (
    <>
      <section className="flex flex-col md:flex-row p-4">
        <div className="w-full p-4 basis-7/12">
          <img className="max-h-70vh mx-auto my-0" src={img} alt="상품 사진" />
        </div>
        <div className="w-full p-4 basis-5/12 flex flex-col">
          <p className="text-gray-700">{category}</p>
          <h3 className="text-3xl font-bold py-2">{title}</h3>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            {price.toLocaleString()}원
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-main font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
              className="p-2 m-4 flex-1 border-2 border-dashed border-main outline-none "
            >
              {options &&
                options.map((option, i) => <option key={i}>{option}</option>)}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
      {openModal && <CartConfirmModal />}
    </>
  );
}
