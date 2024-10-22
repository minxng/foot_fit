import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

export default function NavBar() {
  return (
    <header className="border-b border-gray-300 flex p-4 justify-between">
      <Link
        to="/"
        className={
          "text-xl font-medium text-blue-800 flex items-center gap-x-2"
        }
      >
        <LuShoppingBag color="#0e399d" />
        <h1>SHOP</h1>
      </Link>
      <nav className="text-black flex items-center gap-x-4">
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/carts">
          <span>Carts</span>
        </Link>
        <Link to="/products/new">
          <FaPencilAlt color="#000" />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
