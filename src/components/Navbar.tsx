import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/about">About</Link>
    </div>
  );
};
export default Navbar;