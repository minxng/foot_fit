import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { checkAuthState, login, logout } from "../firebase-config";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [user, setUser] = useState();

  useEffect(() => {
    checkAuthState((user) => {
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then((user) => setUser(user));
  };
  const handleLogout = () => {
    logout().then((user) => setUser(user));
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
        <Link to="/carts">
          <span>Carts</span>
        </Link>
        <Link to="/products/new" className={"text-black"}>
          <FaPencilAlt />
        </Link>
        {!user && <button onClick={() => handleLogin()}>Login</button>}
        {user && (
          <div className="flex gap-2">
            <img
              src={user.photoURL}
              alt="프로필 사진"
              className="w-6 rounded-full"
            />
            {user.displayName}
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        )}
      </nav>
    </header>
  );
}
