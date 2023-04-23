import Image from "next/image"
import Link from "next/link";

interface Props {
    product: Product;
  }
  
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  
  interface Rating {
    rate: number;
    count: number;
  }

const ProductCard = ({product} : Props) => {
  return (
    <div

className='shadow-md p-4'
>

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
        className='w-full max-h-48'
      />
      <Link href={`/shop/${product.id}`}>Mas informacion</Link>
      </div>
       
  )
}

export default ProductCard