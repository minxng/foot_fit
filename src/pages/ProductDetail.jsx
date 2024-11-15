import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";
import { addCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";

export default function ProductDetail() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();
  const {
    state: { id, img, title, price, category, description, options },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleClick = () => {
    addCart(uid, {
      id,
      img,
      title,
      price,
      option: selected,
      quantity: 1,
    }).then(() => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    });
  };
  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <div className="w-full px-4 basis-7/12">
          <img src={img} alt="상품 사진" />
        </div>
        <div className="w-full p-4 basis-5/12 flex flex-col">
          <h3 className="text-3xl font-bold py-2">{title}</h3>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            {price}
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
    </>
  );
}
