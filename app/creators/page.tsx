import {
  ChartNoAxesColumnIncreasing,
  Funnel,
  Shapes,
  TextAlignStart,
} from "lucide-react";
import Badge from "../components/Badge";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import CourseCard from "../components/HomePage/CourseCard/CourseCard";
import { courses } from "@/lib/data";
const CreatorsPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <section className=" bg-brand">
          <div className="max-w-[1200px] mx-auto p-8 pb-20 text-white flex flex-col justify-between gap-10">
            <div className="flex items-center gap-6">
              <Image
                src="/assets/peopleprofile/p1.png"
                alt="PurePearl Studio"
                width={96}
                height={96}
                className="rounded-3xl"
              />

              {/* Name & Role */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h1 className="font-poppins-600 text-[36px] leading-[120%] tracking-[-1%] text-shuttle-gray-50">
                    PurePearl Studio
                  </h1>
                  <span className="px-6 py-2 rounded-3xl bg-electric-lime-400 text-shuttle-gray-950 font-satoshi-500 leading-[120%] text-[16px]">
                    Creator
                  </span>
                </div>
                <p className="font-satoshi-400 text-[18px] leading-[160%] text-shuttle-gray-50">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Description Paragraphs */}
            <p className="font-satoshi-400 text-[18px] leading-[160%] text-shuttle-gray-50">
              Welcome to the creative world of PurePearl Studio. Here,
              you&apos;ll discover the passion, expertise, and inspiration that
              drive my creative journey. Let&apos;s explore and learn together!
              <br></br>
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>

            <div className="flex items-center justify-between w-[1198px]">
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded-3xl bg-white text-shuttle-gray-950 text-[18px] flex items-center gap-1.5 leading-[120%] font-satoshi-500">
                  <span className="text-brand">3</span>
                  <span>Products</span>
                </button>

                <button className="px-6 py-3 rounded-3xl bg-white text-shuttle-gray-950 text-[18px] flex items-center gap-1.5 leading-[120%] font-satoshi-500">
                  <span className="text-brand">12</span>
                  <span>Followers</span>
                </button>
              </div>

              <button className="px-6 py-3 rounded-3xl bg-electric-lime-400 text-[#040819] font-satoshi-500 text-[18px] leading-[120%]">
                Follow
              </button>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-between max-w-[1201px] mx-auto mt-20">
          <div className="flex items-center gap-4">
            <Badge
              title="Filter"
              icon={Funnel}
              className="py-3 px-4 rounded-3xl border border-shuttle-gray-200 flex items-center gap-2"
            />
            <Badge
              title="Level"
              icon={ChartNoAxesColumnIncreasing}
              className="py-3 px-4 rounded-3xl border border-shuttle-gray-200 flex items-center gap-2"
            />
            <Badge
              title="Category"
              icon={Shapes}
              className="py-3 px-4 rounded-3xl border border-shuttle-gray-200 flex items-center gap-2"
            />
          </div>
          <div>
            <Badge
              title="Most relevant"
              icon={TextAlignStart}
              className="py-3 px-4 rounded-3xl border border-shuttle-gray-200 flex items-center gap-2"
            />
          </div>
        </section>

        <section className="mt-12 mb-20">
          <CourseCard course={courses[0]}></CourseCard>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default CreatorsPage;
