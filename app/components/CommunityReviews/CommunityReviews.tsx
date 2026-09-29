import { reviewsData } from "@/lib/data";
import Image from "next/image";

export default function CommunityReviews() {
  return (
    <section className="relative overflow-hidden bg-white py-10 px-6 sm:px-10 md:px-16 lg:px-20 min-h-screen flex items-center justify-center">
      {/* Top-Right Lime Gradient (Deeper Opacity & Color) */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(212,251,32,0.85)_0%,_rgba(255,255,255,0)_70%)] blur-3xl opacity-100" />

      {/* Bottom-Left Blue Gradient (Deeper Opacity & Color) */}
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(147,197,253,0.85)_0%,_rgba(255,255,255,0)_70%)] blur-3xl opacity-100" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-start">
          <div>
            <h2 className="font-poppins-600 text-[44px] text-shuttle-gray-950 leading-[120%] tracking-[-1%]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div>
            <p className="font-satoshi-400 text-[18px] leading-[160%] text-black-700">
              At ByteSpace, our vibrant community of learners and creators is at
              the<br></br> heart of what we do. Hear directly from those who
              have experienced the<br></br> transformative journey of learning
              and creating on our platform. Explore<br></br> testimonials that
              reflect the diverse perspectives of enthusiastic learners<br></br>{" "}
              and accomplished creators.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[41px]">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05),_0_10px_10px_-5px_rgba(0,0,0,0.02)] flex flex-col justify-between border border-white/60 hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="mb-6">
                  <Image
                    src={item.avatar}
                    alt={"profile"}
                    className="w-16 h-16 rounded-full object-cover shadow-sm"
                    width={24}
                    height={24}
                  />
                </div>

                <h3 className="font-poppins-600 text-[20px] leading-[120%] tracking-[-1%] text-black-950">
                  {item.name}
                </h3>
                <p className="text-brand font-satoshi-400 text-[18px] leading-[160%] mb-6">
                  {item.role}
                </p>

                <p className="font-satoshi-400 text-[18px] leading-[160%] text-black-700">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
