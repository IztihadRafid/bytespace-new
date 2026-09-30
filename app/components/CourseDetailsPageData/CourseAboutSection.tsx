"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { keyPoints, sneakPeakImages } from "@/lib/data";

export default function CourseAboutSection() {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <h2 className="text-xl font-poppins-600 leading-[120%] tracking-[-1%] text-shuttle-gray-950">
        Description
      </h2>
      <div className="space-y-3 font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
        <p>
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive<br></br> course, &quot;Build Digital
          Assets: A Comprehensive Guide.&quot; This transformative learning
          experience invites<br></br> you to delve deep into the intricacies of
          crafting impactful digital content. From laying the groundwork
          <br></br> with foundational concepts to mastering advanced techniques,
          this guide is meticulously curated to<br></br> empower you with the
          skills essential for navigating the dynamic landscape of digital asset
          creation.
        </p>

        <p>
          In the initial modules, you&apos;ll establish a solid foundation by
          immersing yourself in the foundational<br></br> concepts that form the
          backbone of digital asset creation. Understand the fundamental
          elements that<br></br>
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate<br></br> effectively in the
          digital realm.
        </p>

        <p>
          As you progress through the course, you&apos;ll ascend to higher
          levels of expertise, delving into the nuances<br></br> of design
          principles that drive impactful creations. Uncover the secrets behind
          effective visual<br></br> communication, exploring color theory,
          typography, and layout strategies that elevate your digital assets
          <br></br> to new heights. Engage in hands-on exercises that reinforce
          your understanding, allowing you to apply<br></br> these principles in
          practical scenarios.
        </p>
      </div>

      {/* Sneak Peak Section */}
      <div>
        <h3 className="text-xl font-poppins-600 leading-[120%] tracking-[-1%] text-shuttle-gray-950 mb-6">
          Sneak Peak
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sneakPeakImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-32 rounded-2xl overflow-hidden bg-shuttle-gray-100 border border-shuttle-gray-200"
            >
              <Image
                src={src}
                alt={`Sneak peak`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* KeyPoints Section */}
      <div>
        <h3 className="text-xl font-poppins-600 leading-[120%] tracking-[-1%] text-shuttle-gray-950 mb-6">
          Key Points
        </h3>
        <div className="space-y-3">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-persian-blue-600 fill-persian-blue-800 stroke-white shrink-0" />
              <span className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
