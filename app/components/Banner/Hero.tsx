import { SearchInput } from "../SearchInput";
import { ButtonGreen } from "../ui/ButtonGreen";
import { ColoredOrnament } from "../ui/ColoredOrnament";
import triangle from "@/public/assets/trianglewhite.png";
import circle from "@/public/assets/circlewhite.png";
import cylinder from "@/public/assets/cylindergreen.png";
import spring1 from "@/public/assets/springgreen.png";
import spring2 from "@/public/assets/springwhite.png";

const Hero = () => {
  return (
    <div className="overflow-hidden pt-16 pb-24 ">
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
      <div className="abosolute top-40 z-40 right-0">
        <ColoredOrnament
          src={spring1}
          color="var(--color-electric-lime-400)"
          className="w-[386px] h-[386px] absolute -top-72 -left-15 z-10"
        />

        <ColoredOrnament
          src={spring2}
          color="white"
          className="w-[175px] h-[175px] absolute -top-60 right-52 z-10"
        />

        <ColoredOrnament
          src={circle}
          color="white"
          className="w-[240px] h-[240px] absolute -bottom-10 left-[2%] -rotate-[20deg] z-10"
        />

        <ColoredOrnament
          src={cylinder}
          color="var(--color-electric-lime-400)"
          className="w-[370px] h-[370px] absolute -top-72 left-92  z-10"
        />

        <ColoredOrnament
          src={triangle}
          color="white"
          className="w-[188px] h-[188px] absolute -top-60 right-20 z-10"
        />

        <ColoredOrnament
          src={spring2}
          color="white"
          className="w-[180px] h-[180px] absolute bottom-8 right-[3%] -rotate-[35deg] z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
