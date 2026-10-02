"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    console.log(email, " ", password);
    alert("Welcome Back!");
    router.push("/");
  };
  return (
    <div className="w-full  lg:max-w-[579px] bg-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col justify-between min-h-[620px]">
      <div className="h-[683px]">
        {/* Header Section */}
        <div className="mb-6 ">
          <span className="font-satoshi-400 text-[18px] text-persian-blue-800 leading-[160%] mb-2">
            Sign In
          </span>
          <h1 className="font-poppins-600 text-3xl lg:text-[44px] leading-[120%] tracking-[-1%] text-shuttle-gray-950">
            Welcome Back
          </h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5 " onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="designer@example.com"
              className="w-full px-6 py-3 rounded-xl border border-shuttle-gray-200 text-[18px] font-satoshi-400 placeholder:text-shuttle-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              placeholder="********"
              className="w-full px-6 py-3 rounded-xl border border-shuttle-gray-200 text-[18px] font-satoshi-400 placeholder:text-shuttle-gray-400"
            />
          </div>

          {/* Sign In Button */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-3xl bg-electric-lime-400 text-shuttle-gray-950 font-satoshi-500 text-[18px] leading-[120%] hover:bg-lime-300 hover:cursor-pointer transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>

        {/*  Divider  */}
        <div className="relative my-6 p-10 text-center text-xs text-shuttle-gray-400">
          <div className="absolute inset-0 flex items-center">
            <div className="w-[453px] mx-auto border-t border-shuttle-gray-200" />
          </div>
          <span className="relative bg-white px-3 text-[18px] font-satoshi-400 text-shuttle-gray-400">
            or
          </span>
        </div>

        {/* Social Logins */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-18 h-18 rounded-2xl border border-shuttle-gray-200 flex items-center justify-center text-black hover:bg-shuttle-gray-50 transition-colors"
          >
            <FaFacebook className="w-[33px] h-[33px] fill-current" />
          </button>

          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-18 h-18 rounded-2xl border border-shuttle-gray-200 flex items-center justify-center text-black hover:bg-shuttle-gray-50 transition-colors"
          >
            <FaGoogle className="w-[33px] h-[33px] fill-current" />
          </button>
        </div>

        <div className="text-center pt-4 relative">
          <p className="font-satoshi-400 text-[16px] lg:absolute lg:top-15 lg:left-1/2 lg:-translate-x-1/2 text-shuttle-gray-700">
            New user?{" "}
            <Link
              href="/register"
              className="text-persian-blue-800 text-[16px] font-satoshi-400 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
