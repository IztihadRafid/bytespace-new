import Badge from "@/app/components/Badge";
import CourseAboutSection from "@/app/components/CourseDetailsPageData/CourseAboutSection";
import CourseSidebar from "@/app/components/CourseDetailsPageData/CourseSidebar";
import PlayVideoSection from "@/app/components/CourseDetailsPageData/PlayVedioSection";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar";
import { courses } from "@/lib/data";
import { ChartNoAxesColumnIncreasing, Share2, Star, Users } from "lucide-react";
import Image from "next/image";

interface CourseDetailsPageProps {
  params: Promise<{ id: string }>;
}

const CourseDetailsPage = async ({ params }: CourseDetailsPageProps) => {
  const { id } = await params;

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="">
      <Navbar />
      <main className=" ">
        <div className="bg-brand h-[957px] py-10">
          <div className="flex justify-between max-w-[1200px] mx-auto mb-10">
            <div className=" flex flex-col gap-6 items-start">
              <div>
                <h1 className="font-poppins-600 mb-2 text-shuttle-gray-50 text-[36px] leading-[120%] tracking-[-1%]">
                  {course.title}
                </h1>
                <p className="font-poppins-600 text-shuttle-gray-50 text-[20px] leading-[120%] tracking-[-1%]">
                  {course.description}
                </p>
              </div>
              <p className="font-satoshi-500 text-[18px] leading-[120%] text-[#F1F4FE]">
                by{" "}
                <span className="text-electric-lime-400">{course.author}</span>
              </p>
              <div className="flex gap-4 items-center">
                <Badge
                  iconClassName="text-brand"
                  title="Intermediate"
                  icon={ChartNoAxesColumnIncreasing}
                  className="py-2 px-6 text-[16px] rounded-3xl bg-white text-shuttle-gray-950 border border-shuttle-gray-200 flex items-center gap-2"
                />
                <Badge
                  iconClassName="text-brand"
                  title="4.8 (172 reviews)"
                  icon={Star}
                  iconFill="currentColor"
                  className="py-2 px-6 text-[16px] rounded-3xl bg-white text-shuttle-gray-950 border border-shuttle-gray-200 flex items-center gap-2"
                />
                <Badge
                  iconClassName="text-brand"
                  title="199 Students"
                  icon={Users}
                  className="py-2 px-6 text-[16px] rounded-3xl bg-white text-shuttle-gray-950 border border-shuttle-gray-200 flex items-center gap-2"
                />
              </div>
            </div>
            <div>
              <Badge
                title="Share"
                icon={Share2}
                className="py-2 px-6 rounded-3xl border border-shuttle-gray-200 flex items-center gap-2 bg-electric-lime-400"
              />
            </div>
          </div>
          {/* video section */}
          <section className="flex gap-[60px] max-w-[1200px] mx-auto mt-24">
            <div>
              <PlayVideoSection
                videoImg={course.videoImg}
                playIcon={course.playIcon}
                title={course.title}
              ></PlayVideoSection>
            </div>
            <div>
              <CourseSidebar></CourseSidebar>
            </div>
          </section>
        </div>

        {/* <p>Price: ${course.price}</p>
        <p>Rating: {course.rating}</p>
        <p>Level: {course.level}</p>
        <p>Students: {course.students}</p> */}

        <div className="max-w-[1200px] mx-auto">
          <CourseAboutSection></CourseAboutSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
