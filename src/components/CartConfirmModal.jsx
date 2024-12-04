import { Link } from "react-router-dom";
import Button from "./common/Button";

export default function CartConfirmModal() {
  return (
    <>
      <div className="w-screen h-screen top-0 left-0	absolute bg-black z-10 opacity-40" />
      <div className="p-12 shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-md border-main bg-white z-20">
        <p className="text-2xl pb-8 text-center font-bold">
          장바구니에 추가하였습니다
        </p>
        <div className="flex gap-4">
          <Link to="/products">
            <Button text="계속 쇼핑하기" />
          </Link>
          <Link to="/carts">
            <Button text="장바구니로 이동하기" bg="bg-blue-400" />
          </Link>
        </div>
      </div>
    </>
  );
}
