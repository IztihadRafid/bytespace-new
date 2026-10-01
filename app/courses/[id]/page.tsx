import Badge from "@/app/components/Badge";
import CourseAboutSection from "@/app/components/CourseDetailsPageData/CourseAboutSection";
import CourseLessonsSection from "@/app/components/CourseDetailsPageData/CourseLessonsSection";
import CourseSidebar from "@/app/components/CourseDetailsPageData/CourseSidebar";
import CourseTabs from "@/app/components/CourseDetailsPageData/CourseTabs";
import PlayVideoSection from "@/app/components/CourseDetailsPageData/PlayVedioSection";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar";
import { courses } from "@/lib/data";
import { ChartNoAxesColumnIncreasing, Share2, Star, Users } from "lucide-react";
import Image from "next/image";

interface CourseDetailsPageProps {
  params: Promise<{ id: string }>;
}
interface CourseTabsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}
const CourseDetailsPage = async ({ params }: CourseDetailsPageProps) => {
  const { id } = await params;

  const course = courses.find((course) => String(course.id) === String(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <Navbar />
      <main className="max-w-[1440px] mx-auto">
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
                className="py-2 px-6 rounded-3xl border border-shuttle-gray-200 flex items-center gap-2 bg-electric-lime-400 hover:bg-electric-lime-400/90 hover:cursor-pointer"
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

        <div className="max-w-[1200px] mx-auto">
          <CourseTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
