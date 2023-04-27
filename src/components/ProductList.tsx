import { Product } from "@/interfaces/product.interface";
import ProductCard from "@/components/ProductCard";

const fakePromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

const getData = async (): Promise<Array<Product>> => {
  await fakePromise();
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

const ProductList = async () => {
  const products = await getData();
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </>
  );
};
export default ProductList;