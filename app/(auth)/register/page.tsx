import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-[579px] bg-white rounded-3xl sm:p-12 shadow-xl flex flex-col justify-between ">
      {/* Header Section */}
      <div className="mb-10">
        <span className="font-satoshi-400 text-[18px] text-persian-blue-800 leading-[160%] mb-2">
          Create an Account
        </span>
        <h1 className="font-poppins-600 text-[44px] leading-[120%] tracking-[-1%] text-shuttle-gray-950">
          Welcome to <br />
          ByteSpace
        </h1>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Jamie Davis"
            className="w-full px-6 py-3 rounded-xl border border-shuttle-gray-200 text-[18px] font-satoshi-400 placeholder:text-shuttle-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
            Email
          </label>
          <input
            type="email"
            placeholder="designer@example.com"
            className="w-full px-6 py-3 rounded-xl border border-shuttle-gray-200 text-[18px] font-satoshi-400 placeholder:text-shuttle-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-6 py-3 rounded-xl border border-shuttle-gray-200 text-[18px] font-satoshi-400 placeholder:text-shuttle-gray-400"
          />
        </div>

        {/* register */}
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="px-6 py-3 rounded-3xl bg-electric-lime-400 text-shuttle-gray-950 font-satoshi-500 text-[18px] leading-[120%] hover:bg-lime-300 hover:cursor-pointer transition-colors"
          >
            Continue
          </button>
        </div>
      </form>

      <div className="text-center pt-8">
        <p className="font-satoshi-400 text-[16px] text-shuttle-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-persian-blue-800 text-[16px] font-satoshi-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
