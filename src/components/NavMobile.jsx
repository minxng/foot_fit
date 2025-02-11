import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./common/Button";

export default function NavMobile({
  open,
  user,
  login,
  logout,
  closeMenu,
  loading,
}) {
  return (
    <>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-white z-10 p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <img className="w-40" src={process.env.REACT_APP_LOGO} alt="로고" />
            <IoCloseSharp
              onClick={closeMenu}
              className="text-4xl cursor-pointer"
            />
          </div>
          {user ? (
            <div className="flex justify-between">
              <span className="text-lg font-semibold">
                {user.displayName}님 안녕하세요
              </span>
              <span onClick={logout} className="underline cursor-pointer">
                Log Out
              </span>
            </div>
          ) : (
            <Button text={"Log In"} onClick={login} bg={"bg-sub"} />
          )}
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
