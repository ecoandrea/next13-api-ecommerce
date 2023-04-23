export const metadata = {
    title: "Shop",
    description: "Shop page",
  };
  
  import ProductCard from "@/components/ProductCard";
  
  export interface Product {
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
  
  const getData = async (): Promise<Array<Product>> => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };
  
  export default async function Home() {
    const products = await getData();
  
    return (
      <>
        <h1 className="text-center text-3xl my-4">Products</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </>
    );
  }