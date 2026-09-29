import Image from "next/image";
import progressbar from "@/public/assets/progressbar.png";

const ProgressBadge = () => {
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 w-[220px] ">
      <h2 className="font-satoshi-500 text-[14px] leading-[120%]">
        Learning Progress
      </h2>
      <p className="font-semibold font-poppins-600 text-[48px] leading-[120%] tracking-[-1%]">
        55%
      </p>
      <Image src={progressbar} alt="progressbar"></Image>
    </div>
  );
};

export default ProgressBadge;
