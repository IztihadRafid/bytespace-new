import { courses } from "@/lib/data";
import { Star } from "lucide-react";
import Image from "next/image";
import LevelBadge from "../../ui/LevelBadge";
import AvatarStack from "../../ui/AvatarStack";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  courseImg: string;
  rating: number;
  level: string;
  price: number;
  students: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 bg-white lg:w-[1200px] mx-auto">
      {courses.map((course, idx) => (
        <Link
          href={`/courses/${course.id}`}
          key={idx}
          className="border border-shuttle-gray-200   rounded-3xl p-4 "
        >
          <div className="w-full relative overflow-hidden rounded-xl">
            <Image
              src={course.courseImg}
              alt={course.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />

            {/* Added overlay block */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1 text-[11px] font-satoshi-500 text-black/80">
              <span className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                17 Lessons
              </span>
              <span className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                2 hours 16 mins
              </span>
              <span className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                59 Comments
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
            <h4 className="text-black-950 font-poppins-600 text-[20px] leading-[120%] tracking-[-1%]">
              {course?.title}
            </h4>
            <p className="flex items-center justify-end text-black-700">
              {course?.rating}
              <span className="w-6 h-6">
                <Star color="#CED0D3" fill="#CED0D3" width={16} height={16} />
              </span>
            </p>
          </div>
          <p className="font-satoshi-400 leading-[120%] text-[12px] mb-4">
            by <span className="text-persian-blue-800">purepearl studio</span>
          </p>
          <div className="flex items-center gap-3 mb-4">
            <LevelBadge level={course.level} />
            <AvatarStack></AvatarStack>
          </div>
          <div className="mb-4">
            <p className="text-persian-blue-800 font-poppins-600 text-[20px] leading-[120%]">
              ${course.price}{" "}
              <span className="text-black-700 text-[12px] leading-[160%]">
                /lifetime
              </span>{" "}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCard;
