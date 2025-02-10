import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import NavMobile from "./NavMobile";
import NavPc from "./NavPc";

export default function NavBar() {
  const { user, loading, login, logout } = useAuthContext();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="border-b border-gray-300 flex p-4 justify-between items-center gap-4 sticky w-full top-0 bg-white z-10">
      <RxHamburgerMenu
        className="text-4xl cursor-pointer sm:absolute sm:invisible"
        onClick={() => setOpen(true)}
      />
      <NavMobile
        open={open}
        user={user}
        login={login}
        closeMenu={closeMenu}
        loading={loading}
        className="sm:absolute sm:invisible"
      />
      <Link
        to="/"
        className={
          "text-xl font-medium text-main flex items-center gap-x-2 text-center"
        }
      >
        <img className="w-40" src={process.env.REACT_APP_LOGO} alt="로고" />
      </Link>
      <NavPc user={user} login={login} logout={logout} loading={loading} />
    </header>
  );
}
