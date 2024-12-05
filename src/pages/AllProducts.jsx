import LoadingSpinner from "../components/common/LoadingSpinner";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";

export default function AllProducts() {
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();
  if (isLoading) return <LoadingSpinner />;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </ul>
  );
}
