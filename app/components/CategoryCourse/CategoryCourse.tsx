"use client";
import { useState } from "react";
import { categoryCourseRows } from "@/lib/data";

export default function CategoryCourse() {
  const courseCategory = categoryCourseRows[0] || [];
  const [active, setActive] = useState(courseCategory[0] || "Featured");

  return (
    <div className="flex md:flex-row flex-wrap items-center justify-center gap-3 bg-white  ">
      {courseCategory.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`rounded-3xl px-4 py-3 text-[16px] font-satoshi-500 leading-[120%] transition ${
            active === category
              ? "bg-electric-lime-400 text-shuttle-gray-950"
              : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
