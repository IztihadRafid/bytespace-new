import { Video } from "lucide-react";
import { modules } from "@/lib/data";
import Header from "./Header";
import SubHeader from "./SubHeader";
import LearningProgress from "./LearningProgress";

export default function CourseLessonsSection() {
  return (
    <div className="flex flex-col gap-6 max-w-[723] mx-auto">
      <Header text="Explore the Modules"></Header>
      <SubHeader
        text="Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences."
      ></SubHeader>

      <Header text="Lesson List"></Header>

      {modules.map((module) => (
        <div key={module.id} className="flex  gap-3.25 items-center">
          <div className="w-18 h-18 p-4 rounded-3xl bg-electric-lime-400 flex items-center justify-center shrink-0">
            <Video className="w-7.5 h-7.5 text-shuttle-gray-950" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-poppins-500 text-[16px] leading-[120%] text-shuttle-gray-950 ">
              {module.title}
            </h4>
            <p className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
              {module.description}
            </p>
          </div>
        </div>
      ))}

      {/* Lesson Content Section */}
      <Header text="Lesson Content"></Header>
      <SubHeader
        text="Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes."
      ></SubHeader>

      {/* Lesson Progress Tracking */}
      <Header text="Lesson Progress Tracking"></Header>
      <SubHeader
        text="Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey."
      ></SubHeader>

      {/* Progress Card */}
      <LearningProgress></LearningProgress>
    </div>
  );
}
