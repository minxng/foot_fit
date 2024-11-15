import { createContext, useContext, useEffect, useState } from "react";
import { getCarts } from "../api/firebase";
import { useAuthContext } from "./AuthContext";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const { uid } = useAuthContext();
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    getCarts(uid).then((resp) => {
      setCarts(resp);
    });
  }, [uid]);
  return <CartContext.Provider value={carts}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
