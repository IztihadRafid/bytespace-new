import { features, lessons } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function CourseSidebar() {
  return (
    <div className="w-full max-w-103 rounded-3xl border border-shuttle-gray-200 bg-white p-10 shadow-sm">
      <div className="flex flex-col gap-3">
        <h3 className="font-poppins-600 text-[20px] leading-[120%] tracking-[-1%] text-shuttle-gray-950 mb-6">
          112 Lessons (24 hours)
        </h3>

        {/* Lesson List */}
        <div className=" space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-2.5">
                <span className="font-satoshi-500 text-[16px] leading-[120%]text-shuttle-gray-950">
                  {lesson.id}
                </span>
                <span className="font-satoshi-500 max-w-[194px] leading-[120%] text-shuttle-gray-950">
                  {lesson.title}
                </span>
              </div>
              <span className="font-satoshi-400 text-[16px] leading-[160%] font-medium text-persian-blue-800">
                {lesson.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="font-satoshi-400 mt-4 mb-6 text-[16px] leading-[160%] text-shuttle-gray-700">
        99 more videos
      </p>

      <div className="flex flex-col gap-6">
        <p className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        {/* Price section */}
        <div className=" flex items-baseline ">
          <span className="font-poppins-600 text-[36px] leading-[120%] tracking-[-1%] text-persian-blue-800">
            $25
          </span>
          <span className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
            /lifetime
          </span>
        </div>

        <Link
          href="/"
          className="bg-electric-lime-400 hover:bg-electric-lime-500 font-satoshi-500 w-83 rounded-3xl py-3 px-6 text-center text-[16px] leading-[120%] text-shuttle-gray-950 transition-colors"
        >
          Enroll Now
        </Link>
      </div>

      {/* Course Includes Section */}
      <div className="mt-6">
        <h4 className="font-poppins-600 text-[16px] leading-[120%] tracking-[-1%] text-shuttle-gray-950">
          This course include
        </h4>
        <div className="mt-4 space-y-3">
          {features.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={24}
                  height={24}
                ></Image>
                <span className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-shuttle-gray-100" />

      {/*Profile Section */}
      <div className="flex flex-col gap-6 items-start">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/peopleprofile/p8.png"
            alt="PurePearl Studio"
            width={52}
            height={52}
            className=" rounded-full object-cover"
          />
          <div>
            <h5 className="font-poppins-600 leading-[120%] text-[18px] text-shuttle-gray-950">
              PurePearl Studio
            </h5>
            <p className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
              Professional Creator
            </p>
          </div>
        </div>

        <p className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <button className="border border-shuttle-gray-200 rounded-3xl font-satoshi-500 hover:bg-shuttle-gray-50  px-4 py-2 text-[16px] leading-[120%] font-medium text-shuttle-gray-700 transition-colors">
          See Full Profile
        </button>
      </div>
    </div>
  );
}
