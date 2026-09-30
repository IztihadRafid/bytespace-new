import { learningPaths } from "@/lib/data";
import Image from "next/image";

const ExplorePath = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-24 mx-auto">
      <h2 className="font-poppins-600 text-[36px] leading-[120%] tracking-[-0.01em] text-[#040819]">
        Explore Diverse Learning Paths at Bytespace
      </h2>

      <p className="font-satoshi-400 text-[18px] leading-[160%] tracking-normal text-shuttle-gray-400">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various<br></br> fields, ensuring
        there&apos;s something for everyone. Unleash your potential and explore
        our carefully curated categories.
      </p>

      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 mt-6 w-full ">
        {learningPaths.map(({ label, icon }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-3xl  border border-shuttle-gray-200 px-6 py-8"
          >
            <span className="grid size-14 place-items-center rounded-full bg-electric-lime-400 text-[#040819]">
              <Image src={icon} alt={label} width={24} height={24} />
            </span>
            <p className="font-satoshi-400 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePath;
