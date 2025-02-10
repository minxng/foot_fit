import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import CartStatus from "./CartStatus";
import Button from "./common/Button";

export default function NavPc({ user, loading, login, logout }) {
  return (
    <>
      <nav className="text-black flex items-center gap-x-6">
        <Link className="hidden sm:block" to="/products">
          <span>SHOP</span>
        </Link>
        {/* && user.isAdmin */}
        {user && !loading && (
          <Link to="/products/new" className="text-black hidden sm:block">
            <FaPencilAlt className="text-2xl" />
          </Link>
        )}
        {user && !loading && (
          <div className="items-center gap-1 shrink-0 hidden sm:block">
            <img
              src={user.photoURL}
              alt="프로필"
              className="w-8 rounded-full"
            />
          </div>
        )}
        <div className="hidden sm:block">
          <Button
            text={user ? "Log Out" : "Log In"}
            onClick={user ? logout : login}
            bg={"bg-sub"}
          />
        </div>
        {user && !loading && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
      </nav>
    </>
  );
}
