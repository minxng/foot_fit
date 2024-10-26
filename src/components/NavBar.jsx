import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { checkAuthState, login, logout } from "../firebase-config";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [user, setUser] = useState();
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    checkAuthState((user) => {
      setUser(user);
      if (!user) {
        setAdmin(false);
      }
    });
  }, []);
  const handleLogin = () => {
    login().then((isAdmin) => {
      setAdmin(isAdmin);
    });
  };
  return (
    <header className="border-b border-gray-300 flex p-4 justify-between">
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
        {user && (
          <Link to="/carts">
            <span>Carts</span>
          </Link>
        )}
        {isAdmin && (
          <Link to="/products/new" className={"text-black"}>
            <FaPencilAlt />
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-1">
            <img
              src={user.photoURL}
              alt="프로필 사진"
              className="w-8 rounded-full"
            />
            <span className="hidden md:block">{user.displayName}</span>
          </div>
        )}
        <button
          className="bg-main text-white rounded px-4 py-2"
          onClick={user ? logout : () => handleLogin()}
        >
          {user ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
}
