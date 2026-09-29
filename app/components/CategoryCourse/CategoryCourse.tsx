"use client";
import { useState } from "react";
import { categoryRows } from "@/lib/data";

export default function CategoryCourse() {
  const courseCategory = categoryRows[0] || [];
  const [active, setActive] = useState(courseCategory[0] || "Featured");

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 bg-white  ">
      {courseCategory.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`rounded-full px-5 py-2.5 text-[16px] font-satoshi-500 leading-[120%] transition ${
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
