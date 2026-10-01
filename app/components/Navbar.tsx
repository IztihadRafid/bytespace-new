import Image from "next/image";
import logo from "../../public/images/Header_Logo.png";
import Link from "next/link";
import { Handbag } from "lucide-react";
const Navbar = () => {
  return (
    <div className="bg-brand max-w-[1440px] mx-auto">
      <section className="flex items-center justify-between py-8 max-w-[1200px] mx-auto">
        <Link href={"/"}>
          <Image src={logo} alt="logo"></Image>
        </Link>
        <div className="text-shuttle-gray-50 flex gap-6 font-satoshi-400 ">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creators">Creator</Link>
        </div>
        <div className="text-shuttle-gray-50 flex gap-6 font-satoshi-400 ">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Join us</Link>
          <Link href="/cart">
            <Handbag />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
