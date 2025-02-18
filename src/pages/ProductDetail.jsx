import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";
import useCarts from "../hooks/useCarts";
import CartConfirmModal from "../components/CartConfirmModal";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const {
    state: { id, img, title, price, category, description, options },
  } = useLocation();
  const { user } = useAuthContext();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(options && options[0]);
  const [open, setOpen] = useState(false);
  const { addCartItem } = useCarts();
  const handleClick = () => {
    if (!user) {
      return alert("로그인 후 이용해주세요.");
    }
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
      <section className="flex flex-col md:flex-row lg:p-4 lg:w-2/3 w-full mx-auto my-0">
        <div className="p-4 md:w-3/5 w-full">
          <img className="w-full" src={img} alt="상품 사진" />
        </div>
        <div className="md:w-2/5 w-full p-4 flex flex-col md:gap-2">
          <p className="text-gray-700">{category}</p>
          <h3 className="text-xl lg:text-2xl font-medium py-2">{title}</h3>
          <p className="text-lg lg:text-xl font-medium py-2">
            {price.toLocaleString()}원
          </p>
          <div className="flex items-center">
            <label className="text-main font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
              className="p-2 m-4 flex-1 border-2 border-main outline-none"
            >
              {options &&
                options.map((option, i) => <option key={i}>{option}</option>)}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
          <h4
            className="mt-4 flex justify-between items-center cursor-pointer font-semibold"
            onClick={() => setOpen((v) => !v)}
          >
            상세정보
            <span className="text-2xl px-4">{open ? "-" : "+"}</span>
          </h4>
          <p
            className={`leading-6 break-keep text-sm ${
              !open && "line-clamp-5"
            }`}
          >
            {description}
          </p>
        </div>
      </section>
      {openModal && <CartConfirmModal />}
    </>
  );
}
