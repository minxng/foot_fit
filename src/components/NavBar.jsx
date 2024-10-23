import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { login } from "../firebase-config";

export default function NavBar() {
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
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}
