import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import Button from "./common/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function NavBar() {
  const { user, loading, login, logout } = useAuthContext();
  return (
    <header className="border-b border-gray-300 flex p-4 justify-between gap-4 sticky w-full top-0 bg-white z-10">
      <Link
        to="/"
        className={"text-xl font-medium text-main flex items-center gap-x-2"}
      >
        <img className="w-40" src={process.env.REACT_APP_LOGO} alt="로고" />
      </Link>
      <nav className="text-black flex items-center gap-x-6">
        <Link to="/products">
          <span>Products</span>
        </Link>
        {/* && user.isAdmin */}
        {user && !loading && (
          <Link to="/products/new" className={"text-black"}>
            <FaPencilAlt className="text-2xl" />
          </Link>
        )}
        {user && !loading && (
          <div className="flex items-center gap-1 shrink-0">
            <img
              src={user.photoURL}
              alt="프로필 사진"
              className="w-8 rounded-full"
            />
          </div>
        )}
        <Button
          text={user ? "Log Out" : "Log In"}
          onClick={user ? logout : login}
          bg={"bg-sub"}
        />
        {user && !loading && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
      </nav>
    </header>
  );
}
