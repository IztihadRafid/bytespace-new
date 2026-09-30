"use client";
import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Card from "../components/ui/Card";
import imgcard from "@/public/assets/courses/img3.webp";
import imgcard2 from "@/public/assets/courses/img2.webp";
import greencircle from "@/public/assets/greencircle.png";
import spring from "@/public/assets/springwhite.png";
import triangle from "@/public/assets/trianglegreen.png";
import HappyStudentBadge from "../components/ui/HappyStudentBadge";
import AuthHeader from "../components/authTitles/AuthHeader";
import AuthSubHeader from "../components/authTitles/AuthSubHeader";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRegister = pathname === "/register";

  const content = isRegister
    ? {
        title: "Sign up and come in",
        subtitle:
          "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
      }
    : {
        title: "Sign in with ease",
        subtitle:
          "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
      };

  return (
    <main className="relative min-h-screen max-w-[1440px] mx-auto bg-brand flex flex-col items-center justify-between p-6 sm:p-10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] flex items-center justify-start">
        <Link href="/">
          <Image src={logo} width={32} height={35} alt="Logo" />
        </Link>
      </div>

      <div className="relative z-10  grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side Showcase */}
        <div className="-mt-10">
          <div className="flex flex-col gap-4 ml-20">
            <AuthHeader title={content.title} />
            <AuthSubHeader subtitle={content.subtitle} />
          </div>

          <div className="relative mt-40">
            <div className="absolute top-0 left-20">
              <Card
                courseImg={imgcard2}
                title={"Build Digital Asset"}
                rating={4.5}
                author={"purepearl studio"}
                level={"Beginner"}
                price={25}
              />
            </div>
            <div className="absolute -top-22 right-22 z-10">
              <Card
                courseImg={imgcard}
                title={"the Power of Big Data"}
                rating={4.5}
                author={"purepearl studio"}
                level={"Beginner"}
                price={25}
              />
            </div>
            <div className="absolute z-20 -top-20 left-28">
              <Image
                src={greencircle}
                width={146}
                height={146}
                alt="Green Circle"
              />
            </div>
            <div className="absolute top-67 right-10 z-20">
              <Image src={spring} width={175} height={175} alt="Spring" />
            </div>
            <div className="absolute top-85 left-18">
              <Image src={triangle} width={188} height={188} alt="Triangle" />
            </div>
            <div className="absolute top-95 right-23">
              <HappyStudentBadge variant="lime"></HappyStudentBadge>
            </div>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full flex justify-center">{children}</div>
      </div>

      {/* Bottom spacing anchor to keep vertically balanced */}
      <div className="relative z-10 w-full max-w-[1200px] pointer-events-none" />
    </main>
  );
}
