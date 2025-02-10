import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./common/Button";

export default function NavMobile({ open, user, login, closeMenu, loading }) {
  return (
    <>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-white z-10 p-4 flex flex-col">
          <div className="flex justify-between items-center">
            {user ? (
              user.displayName + "님 안녕하세요"
            ) : (
              <Button text={"Log In"} onClick={login} bg={"bg-sub"} />
            )}
            <IoCloseSharp
              onClick={closeMenu}
              className="text-4xl cursor-pointer"
            />
          </div>
          <Link to="/products" onClick={closeMenu}>
            <span>SHOP</span>
          </Link>
          {user && !loading && (
            <Link
              to="/products/new"
              className={"text-black"}
              onClick={closeMenu}
            >
              상품 등록
            </Link>
          )}
        </div>
      )}
    </>
  );
}
