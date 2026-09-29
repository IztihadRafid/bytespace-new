import { Star } from "lucide-react";
import Image from "next/image";
import studentsImg from "@/public/assets/studentsprofile.png";

const HappyStudentBadge = () => {
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 w-[258px] ">
      <h2 className="font-satoshi-500 text-[16px] leading-[120%]">
        Happy Students
      </h2>
      <div className=" font-semibold font-poppins-600 text-[48px] leading-[120%] tracking-[-1%]">
        <p className="flex items-center gap-2 font-satoshi-400 text-[12px] leading-[160%]">
          4.5<span className="text-[#D1D1D1]"> (240)</span>
          <Star color="#d4fb20" fill="#d4fb20" />
        </p>
      </div>
      <Image src={studentsImg} alt="students"></Image>
    </div>
  );
};

export default HappyStudentBadge;
