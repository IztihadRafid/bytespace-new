"use client";
import { useState } from "react";
import { categoryRows } from "@/lib/data";

export default function CategoryChips() {
  const [active, setActive] = useState("Featured");

  return (
    <div className="flex flex-col items-center gap-3 bg-white">
      {categoryRows.map((row, idx) => (
        <div key={idx} className="flex flex-wrap justify-center gap-4">
          {row.map((categoryskill) => (
            <button
              key={categoryskill}
              onClick={() => setActive(categoryskill)}
              className={`rounded-full px-4 py-3 text-[16px] transition ${
                active === categoryskill
                  ? "bg-electric-lime-400 font-satoshi-500 text-shuttle-gray-950 text-[16px] leading-[120%]"
                  : "bg-shuttle-gray-50 font-satoshi-500 text-shuttle-gray-700 text-[16px] leading-[120%]"
              }`}
            >
              {categoryskill}
            </button>
          ))}
          {idx === categoryRows.length - 1 && (
            <button className="px-4 py-2 font-satoshi-500 text-[16px] leading-[120%] text-persian-blue-800">
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
