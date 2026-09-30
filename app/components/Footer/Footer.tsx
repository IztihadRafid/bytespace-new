"use client";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { ButtonGreen } from "../ui/ButtonGreen";
import { SearchInput } from "../SearchInput";
const Footer = () => {
  return (
    <footer className=" bg-white py-12 px-6  border-t border-shuttle-gray-100 max-w-[1200px] mx-auto">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" width={28} height={32}></Image>
              <span className="font-poppins-700 text-[22px] tracking-tight text-black">
                ByteSpace
              </span>
            </div>

            <p className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%] mb-[45px]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-6 my-1"
            >
              <SearchInput placeholder="Enter your Email"></SearchInput>
              <ButtonGreen type="submit">Search</ButtonGreen>
            </form>

            <p className="font-satoshi-400 text-[12px] text-shuttle-gray-950 leading-[160%] ">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 pt-2 w-[580px]">
            {/* Column 1 */}
            <ul className="flex flex-col gap-3 font-satoshi-400 text-[13px] text-gray-700">
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Featured Categories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Design
                </Link>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-3 font-satoshi-400 text-[13px] text-gray-700">
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Sport
                </Link>
              </li>
            </ul>

            {/* Column 3 */}
            <ul className="flex flex-col gap-3 font-satoshi-400 text-[13px] text-gray-700">
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-satoshi-400 text-[14px] text-shuttle-gray-950 leading-[160%]"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-satoshi-400 text-[12px] text-shuttle-gray-950 leading-[160%]">
          <p>© 2026 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="font-satoshi-400 text-[12px] text-shuttle-gray-950 leading-[160%]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-satoshi-400 text-[12px] text-shuttle-gray-950 leading-[160%]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-satoshi-400 text-[12px] text-shuttle-gray-950 leading-[160%]"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
