import { Star } from "lucide-react";
import Image from "next/image";
import studentsImg from "@/public/assets/studentsprofile.png";
interface HappyStudentBadgeProps {
  variant?: "white" | "lime";
}
const HappyStudentBadge = ({ variant = "white" }: HappyStudentBadgeProps) => {
  const isLime = variant === "lime";

  return (
    <div
      className={`p-4 rounded-2xl flex flex-col gap-2 w-[258px] shadow-sm transition-colors ${
        isLime
          ? "bg-electric-lime-400 text-shuttle-gray-950"
          : "bg-white text-shuttle-gray-950"
      }`}
    >
      <h2 className="font-satoshi-500 text-[16px] leading-[120%]">
        Happy Students
      </h2>

      <div className="font-semibold font-poppins-600 text-[48px] leading-[120%] tracking-[-1%]">
        <p className="flex items-center gap-2 font-satoshi-400 text-[12px] leading-[160%]">
          <span>4.5</span>
          <span
            className={isLime ? "text-shuttle-gray-800/60" : "text-[#D1D1D1]"}
          >
            (240)
          </span>
          <Star
            color={isLime ? "#003be2" : "#d4fb20"}
            fill={isLime ? "#003be2" : "#d4fb20"}
            className="w-4 h-4"
          />
        </p>
      </div>

      <Image src={studentsImg} alt="students" className="w-auto h-auto" />
    </div>
  );
};

export default HappyStudentBadge;
