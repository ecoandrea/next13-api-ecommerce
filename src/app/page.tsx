import Image from "next/image";
//import StaticIMG from "../../public/img/img-static.webp";

export default async function Home() {
  return (
    <>
      <h2 className="text-center text-3xl my-4">Lista de categorías</h2>
      
      <Image
        src="/img/img-static.webp"
        alt="Static Image"
        width={200}
        height={200}
      />
      <h3>Espacio reservado</h3>
    </>
  );
}