import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

export default function NotFound() {
  return (
    <div>
      {/* grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-20" />
      <Navbar />

      <main className="relative max-w-[1440px] mx-auto bg-brand flex flex-col items-center justify-center px-4 overflow-hidden text-center pb-12 md:pb-16 lg:pb-20">
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="text-[160px] md:text-[300px] lg:text-[480px] leading-none tracking-tight font-poppins-600 bg-gradient-to-b from-electric-lime-400 via-electric-lime-400/80 to-electric-lime-400/20 bg-clip-text text-transparent -mb-6 md:-mb-16 lg:-mb-28">
            404
          </h1>
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-8 items-center">
            <h2 className="font-poppins-600 text-[32px] md:text-[48px] lg:text-[72px] text-center text-white tracking-[-1%] leading-[120%]">
              The page you are looking for doesn’t exist
            </h2>
            <p className="font-satoshi-400 text-[16px] lg:text-[18px] leading-[160%] text-shuttle-gray-50">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link
              href="/"
              className="px-6 py-3 rounded-3xl bg-electric-lime-400 text-shuttle-gray-950 font-satoshi-500 text-[18px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
