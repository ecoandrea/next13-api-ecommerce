export const metadata = {
  title: "Shop",
  description: "Shop page",
};

import ProductList from "@/components/ProductList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <h1 className="text-center text-3xl my-4">Lista de Products</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Suspense fallback={<p>Loading products...</p>}>
          {/* @ts-expect-error Server Component */}
          <ProductList />
        </Suspense>
      </div>
    </>
  );
}