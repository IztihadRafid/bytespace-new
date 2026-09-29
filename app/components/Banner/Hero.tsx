import { SearchInput } from "../SearchInput";
import { ButtonGreen } from "../ui/ButtonGreen";
import { ColoredOrnament } from "../ui/ColoredOrnament";
import triangle from "@/public/assets/trianglewhite.png";
import circle from "@/public/assets/circlewhite.png";
import cylinder from "@/public/assets/cylindergreen.png";
import spring1 from "@/public/assets/springgreen.png";
import spring2 from "@/public/assets/springwhite.png";
import spring3 from "@/public/assets/springwhite3.png";
import elipse from "@/public/assets/elipse7.png";
import bannerImg from "@/public/assets/Image.png";
import studentsImg from "@/public/assets/studentsprofile.png";
import progressbar from "@/public/assets/progressbar.png";
import Image from "next/image";
import { Dot, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="overflow-hidden pt-16 pb-24 w-full h-[910px]">
      <div className="relative w-[1200px] mx-auto text-center flex flex-col gap-[60px]">
        <div className="flex flex-col gap-8">
          <h1 className="font-poppins-600 text-[72px] text-white leading-[120%] tracking-[-0.01em]">
            Get Access to Hundreds
            <br /> Courses Available
          </h1>
          <p className="text-shuttle-gray-100 font-satoshi-400 text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <SearchInput placeholder="Course, topic, creator" />
          <ButtonGreen />
        </div>
      </div>
      <div className="abosolute top-40 z-40 w-[1440px] mx-auto">
        <ColoredOrnament
          src={spring1}
          color="var(--color-electric-lime-400)"
          className="w-[386px] h-[386px]  -top-72 right-16"
        />
        <ColoredOrnament
          src={cylinder}
          color="var(--color-electric-lime-400)"
          className="w-[370px] h-[370px] -top-72 left-192"
        />
        <ColoredOrnament
          src={spring2}
          color="white"
          className="w-[175px] h-[175px] -top-50 right-145"
        />
        <ColoredOrnament
          src={triangle}
          color="white"
          className="w-[188px] h-[188px] -top-60 left-40"
        />
        <ColoredOrnament
          src={circle}
          color="white"
          className="w-[342px] h-[342px] bottom-45 right-10 z-20"
        />
        <ColoredOrnament
          src={spring3}
          color="white"
          className="w-[330px] h-[330px] bottom-60 left-195"
        />
      </div>

      <div className="relative w-[1200px] mx-auto">
        <div className="absolute -top-170 left-5">
          <div>
            <Image src={elipse} alt="elipse" width={1149} height={1149}></Image>
            <div className="absolute -top-18 left-[25%]">
              <Image src={bannerImg} alt="banner"></Image>
            </div>
            <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 w-[215px] absolute top-10 left-[25%]">
              <h2 className="font-satoshi-500 text-[16px] leading-[120%]">
                UI/UX Design
              </h2>
              <p className="flex items-center  font-satoshi-400 text-[12px] leading-[160%]">
                <span>200 Courses</span>
                <Dot color="#82868E" />
                <span>1000+ Students</span>
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 w-[220px] absolute top-15 left-[63%]">
              <h2 className="font-satoshi-500 text-[14px] leading-[120%]">
                Learning Progress
              </h2>
              <p className="font-semibold font-poppins-600 text-[48px] leading-[120%] tracking-[-1%]">
                55%
              </p>
              <Image src={progressbar} alt="progressbar"></Image>
            </div>

            <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 w-[258px] absolute top-60 left-[15%]">
              <h2 className="font-satoshi-500 text-[16px] leading-[120%]">
                Happy Students
              </h2>
              <div className=" font-semibold font-poppins-600 text-[48px] leading-[120%] tracking-[-1%]">
                <p className="flex items-center gap-2 font-satoshi-400 text-[12px] leading-[160%]">
                  4.5<span className="text-[#D1D1D1]"> (240)</span>
                  <Star color="#d4fb20" fill="#d4fb20" />
                </p>
              </div>
              <Image src={studentsImg} alt="progressbar"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
