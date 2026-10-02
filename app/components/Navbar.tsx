"use client";
import Image from "next/image";
import logo from "../../public/images/Header_Logo.png";
import Link from "next/link";
import { Handbag, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="bg-brand lg:max-w-[1440px] w-full mx-auto px-4 md:px-0 relative"
    >
      <section className="flex items-center justify-between py-8 w-full lg:max-w-[1200px] mx-auto">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className="text-shuttle-gray-50 hidden md:flex gap-6 font-satoshi-400">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creators">Creator</Link>
        </div>
        <div className="text-shuttle-gray-50 flex items-center gap-6 font-satoshi-400">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/login">Sign In</Link>
            <Link href="/register">Join us</Link>
          </div>
          <Link href="/cart">
            <Handbag />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-shuttle-gray-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </section>

      <div
        className={`md:hidden absolute top-20 z-20 right-4 w-1/2 bg-white rounded-3xl text-shuttle-gray-950 flex flex-col gap-4 font-satoshi-400 px-6 py-4 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/courses" onClick={() => setIsOpen(false)}>
          Courses
        </Link>
        <Link href="/creators" onClick={() => setIsOpen(false)}>
          Creator
        </Link>
        <div className="h-[1px] bg-gray-200 my-1" />
        <Link href="/login" onClick={() => setIsOpen(false)}>
          Sign In
        </Link>
        <Link href="/register" onClick={() => setIsOpen(false)}>
          Join us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
