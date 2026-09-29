import { courses } from "@/lib/data";
import { Star } from "lucide-react";
import Image from "next/image";
import LevelBadge from "../../ui/LevelBadge";
import AvatarStack from "../../ui/AvatarStack";

const CourseCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 gap-10 bg-white w-[1200px] mx-auto">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="border border-shuttle-gray-200 rounded-3xl p-4"
        >
          <div className="w-full relative overflow-hidden rounded-xl">
            <Image
              src={course.courseImg}
              alt={course.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center justify-between my-4">
            <h4 className="text-black-950 font-poppins-600 text-[20px] leading-[120%] tracking-[-1%]">
              {course?.title}
            </h4>
            <p className="flex items-center justify-end text-black-700">
              {course?.rating}
              <span className="w-6 h-6">
                <Star color="CED0D3" fill="#CED0D3" width={16} height={16} />
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
            <p className="text-persian-blue-800 font-poppins-600 text-[20px] leadin-[120%]">
              ${course.price}{" "}
              <span className="text-black-700 text-[12px] leading-[160%]">
                /lifetime
              </span>{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
