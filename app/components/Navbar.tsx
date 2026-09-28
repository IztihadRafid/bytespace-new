import Image from "next/image";
import logo from "../../public/images/Header_Logo.png";
import Link from "next/link";
import { Handbag } from "lucide-react";
const Navbar = () => {
  return (
    <div className="bg-brand">
      <section className="flex items-center justify-between p-8 max-w-[1200px] mx-auto">
        <Image src={logo} alt="logo"></Image>
        <div className="text-shuttle-gray-50 flex gap-6 font-satoshi-400 ">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creator">Creator</Link>
        </div>
        <div className="text-shuttle-gray-50 flex gap-6 font-satoshi-400 ">
          <Link href="/signin">Signin</Link>
          <Link href="/join">Join us</Link>
          <Handbag height={24} width={24} />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
