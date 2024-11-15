import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getCarts, addCart, deleteCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCarts() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();
  const cartsQuery = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCarts(uid),
  });

  const addCartItem = useMutation({
    mutationFn: ({ product }) => addCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });

  const deleteCartItem = useMutation({
    mutationFn: ({ product }) => deleteCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });
  return { cartsQuery, addCartItem, deleteCartItem };
}
