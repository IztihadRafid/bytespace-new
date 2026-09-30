"use client";

import { useState } from "react";
import CourseAboutSection from "./CourseAboutSection";
import CourseLessonsSection from "./CourseLessonsSection";
import CourseReviewsSection from "./CourseReviewsSection";

interface CourseTabsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("About");
  const tabs = ["About", "Lessons", "Reviews"];

  return (
    <div className="w-full max-w-[725px] bg-white font-sans text-shuttle-gray-950 mt-[72px] flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 rounded-3xl text-[16px] leading-[120%] font-satoshi-500 transition-all ${
              activeTab === tab
                ? "bg-electric-lime-400 text-shuttle-gray-950"
                : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* tabs */}
      {activeTab === "About" && <CourseAboutSection />}
      {activeTab === "Lessons" && <CourseLessonsSection />}
      {activeTab === "Reviews" && <CourseReviewsSection />}
    </div>
  );
}
