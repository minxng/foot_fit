import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, getProducts } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 5,
  });
  const addNewProduct = useMutation({
    mutationFn: ({ product, url }) => addProduct(product, url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return { productsQuery, addNewProduct };
}
