import {
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  Funnel,
  Shapes,
  TextAlignStart,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import Badge from "../components/Badge";
import CategoryCourse from "../components/CategoryCourse/CategoryCourse";
import CourseCard from "../components/HomePage/CourseCard/CourseCard";
import Pagination from "../components/CategoryCourse/pagination/Pagination";
import { courses } from "../../lib/data";

const CoursePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="bg-brand flex flex-col gap-8 pt-8 pb-16">
        <h1 className="font-poppins-600 text-center text-[36px] leading-[120%] tracking-[-1%] text-shuttle-gray-50">
          Find Your Next Course
        </h1>
        <div className="flex items-center justify-center gap-4">
          <SearchInput></SearchInput>
          <button className="flex items-center bg-electric-lime-400 py-3 px-6 rounded-3xl text-shuttle-gray-950 font-satoshi-500 text-[18px] leading-[120%]">
            Courses <ChevronDown size={24} />
          </button>
        </div>
      </section>

      <section className="mt-12 mb-10">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
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
        </div>
      </section>

      <section className="mb-10">
        <CategoryCourse></CategoryCourse>
      </section>
      <section className="">
        <div className="mx-auto grid w-[1200px] grid-cols-1 ">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section>
        <Pagination></Pagination>
      </section>
    </div>
  );
};

export default CoursePage;
