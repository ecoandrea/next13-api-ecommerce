import Image from "next/image";
import { Product } from "../page";

interface Props {
  params: {
    id:string,
  }
}
const getProductDetail = async (id: string): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};

const ProductDetail = async ({params} : Props) => {
  const product = await getProductDetail(params.id)
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-full max-h-48"
      />
    </div>
  );
};
export default ProductDetail;