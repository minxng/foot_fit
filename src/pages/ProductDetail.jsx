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
        <div className="w-full p-4">
          <img className="w-full" src={img} alt="상품 사진" />
        </div>
        <div className="w-full p-4 flex flex-col">
          <p className="text-gray-700">{category}</p>
          <h3 className="text-2xl lg:text-3xl font-bold py-2">{title}</h3>
          <p className="text-xl lg:text-2xl font-bold py-2 border-b border-gray-400">
            {price.toLocaleString()}원
          </p>
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
          <p className={`mt-4 text-md ${!open && "line-clamp-5"}`}>
            {description}
          </p>
          <button
            onClick={() => setOpen((v) => !v)}
            className="my-2 py-2 bg-gray-50 rounded"
          >
            {open ? "접어두기" : "더보기"}
          </button>
        </div>
      </section>
      {openModal && <CartConfirmModal />}
    </>
  );
}
