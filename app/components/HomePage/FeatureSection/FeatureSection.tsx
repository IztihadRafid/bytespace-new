import Image from "next/image";
import { Check } from "lucide-react";
import img1 from "@/public/assets/Image.png";
import img2 from "@/public/assets/Image2.png";
import ProgressBadge from "../../ui/ProgressBadge";
import Card from "../../ui/Card";
import imgcard from "@/public/assets/courses/img1.webp";
import spring4 from "@/public/assets/spring4.png";
import HappyStudentBadge from "../../ui/HappyStudentBadge";
import RevenueBadge from "../../ui/RevenueBadge";
import YeartoDate from "../../ui/YeartoDate";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden py-24  bg-white ">
      <div
        className="pointer-events-none absolute -left-40 -top-40 size-[1137px] rounded-full blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, #CBFC01 0%, rgba(203,252,1,0.23) 40%, rgba(203,252,1,0.06) 70%, rgba(203,252,1,0) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1260px] flex-col gap-24 px-4 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="w-[574px]">
            <h2 className="font-poppins-600 text-[44px] leading-[120%] tracking-[-0.01em] text-shuttle-gray-950">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 font-satoshi-400 text-[18px] leading-[160%] text-shuttle-gray-700">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="mt-8 flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-poppins-500 text-[36px] text-brand leading-11 tracking-[-1%]">
                    {s.value}
                  </p>
                  <p className="font-satoshi-400 text-[18px] text-shuttle-gray-700 leading-[160%]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[380px] w-full">
            <Card
              courseImg={imgcard}
              title={"Learn Figma from Basic"}
              rating={4.5}
              author={"purepearl studio"}
              level={"Beginner"}
              price={25}
            />
            <div className="absolute top-16 left-16 w-full">
              <Image
                src={img1}
                alt="image1"
                width={577}
                height={380}
                className="z-50"
              />
            </div>

            <div className="absolute top-55 left-90">
              <ProgressBadge></ProgressBadge>
            </div>
            <div className="absolute top-15 -right-15">
              <Image
                src={spring4}
                alt="spring"
                width={215}
                height={215}
              ></Image>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 mt-[63px]">
          <div className="relative mx-auto h-[420px] w-full">
            <div className="absolute top-0 -left-20">
              <RevenueBadge></RevenueBadge>
            </div>
            <div className="absolute top-40 -left-20">
              <YeartoDate></YeartoDate>
            </div>
            <Image
              src={img2}
              alt="image2"
              width={577}
              height={380}
              className="z-50 absolute top-0 -left-30"
            />
            <div className="absolute -bottom-10 left-50 z-60">
              <HappyStudentBadge></HappyStudentBadge>
            </div>
          </div>

          <div className="w-145">
            <h2 className="font-poppins-600 text-[44px] leading-[120%] tracking-[-0.01em] text-shuttle-gray-950">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-6 font-satoshi-400 text-[18px] leading-7 text-shuttle-gray-700">
              <span className="font-satoshi-700 ">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-6 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="grid size-5 place-items-center rounded-full bg-brand text-white">
                    <Check size={12} />
                  </span>
                  <span className="font-satoshi-500 text-[18px] text-shuttle-gray-950">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
