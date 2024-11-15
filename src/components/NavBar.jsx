import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Button from "./common/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function NavBar() {
  const { user, loading, login, logout } = useAuthContext();
  return (
    <header className="border-b border-gray-300 flex p-4 justify-between gap-4">
      <Link
        to="/"
        className={"text-xl font-medium text-main flex items-center gap-x-2"}
      >
        <LuShoppingBag />
        <h1>SHOP</h1>
      </Link>
      <nav className="text-black flex items-center gap-x-4">
        <Link to="/products">
          <span>Products</span>
        </Link>
        {user && !loading && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && !loading && user.isAdmin && (
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
            <span className="hidden md:block">{user.displayName}</span>
          </div>
        )}
        <Button
          text={user ? "Logout" : "Login"}
          onClick={user ? logout : login}
        />
      </nav>
    </header>
  );
}
