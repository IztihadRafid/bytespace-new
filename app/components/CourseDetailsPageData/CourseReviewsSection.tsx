"use client";
import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { ratingStats, allReviews } from "@/lib/data";

export default function CourseReviewsSection() {
  const [selectedRating, setSelectedRating] = useState<number | "All">("All");
  const ratingFilters = ["All rating", 5, 4, 3, 2, 1];
  const filteredReviews =
    selectedRating === "All"
      ? allReviews
      : allReviews.filter((review) => review.rating === selectedRating);

  return (
    <div className="flex flex-col gap-6 mb-20">
      {/* Header Section */}
      <Header text="What Learners Are Saying" />
      <SubHeader text="Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation." />

      <div className="border w-[723px] border-shuttle-gray-200 rounded-2xl p-10 bg-white flex   items-center gap-6">
        {/* Rating Score Badge */}
        <div className="rounded-lg p-10 bg-electric-lime-400 flex flex-col items-center justify-center shrink-0">
          <span className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
            Ratings
          </span>
          <span className="font-poppins-600 text-[36px] leading-[120%] text-shuttle-gray-950 tracking-[-1%]">
            4.7
          </span>
        </div>

        {/* Rating Bars List */}
        <div className="w-full space-y-2.5">
          {ratingStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {/* Progress Bar Container */}
              <div className="flex-1 bg-shuttle-gray-100  h-2 overflow-hidden">
                <div
                  className="bg-electric-lime-400 h-2 rounded-3xl"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>

              {/* Star Rating Icons */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#4B4C53" stroke="none" />
                ))}
              </div>

              {/* Count */}
              <span className="font-satoshi-400 text-[16px] text-shuttle-gray-700 leading-[160%] w-8 shrink-0">
                {stat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews Filter Section */}
      <Header text="Individual Reviews:"></Header>
      <div className="flex flex-wrap items-center gap-3  w-[723px]">
        {ratingFilters.map((filter) => {
          const isActive =
            filter === "All rating"
              ? selectedRating === "All"
              : selectedRating === filter;

          return (
            <button
              key={String(filter)}
              onClick={() =>
                setSelectedRating(
                  filter === "All rating" ? "All" : (filter as number),
                )
              }
              className={`px-4 py-3 rounded-3xl font-satoshi-500 transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-electric-lime-400 text-shuttle-gray-950 leading-[120%] text-[16px]"
                  : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
              }`}
            >
              {typeof filter === "number" ? (
                <>
                  <Star className="w-5 h-5 text-shuttle-gray-700 fill-shuttle-gray-700" />
                  <span>{filter}</span>
                </>
              ) : (
                filter
              )}
            </button>
          );
        })}
      </div>

      {/* Review Section */}
      {filteredReviews.map((review) => (
        <div
          key={review.id}
          className="border border-shuttle-gray-200 rounded-3xl p-10 bg-white space-y-4"
        >
          <div className="w-[643px]">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={52}
                  height={52}
                />
                <div>
                  <h4 className="font-poppins-500 text-[18px] text-shuttle-gray-950">
                    {review.name}
                  </h4>
                  <p className="font-satoshi-400 text-[16px] text-shuttle-gray-700">
                    {review.role}
                  </p>
                </div>
              </div>
              <span className="font-satoshi-400 text-[16px] text-shuttle-gray-700 leading-[24px]">
                {review.timeAgo}
              </span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "text-shuttle-gray-700 fill-shuttle-gray-700"
                      : "text-shuttle-gray-300 fill-shuttle-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review Text Body */}
          <p className="font-satoshi-400 text-[16px] leading-6 text-shuttle-gray-700">
            &quot;{review.content}&quot;
          </p>
        </div>
      ))}
    </div>
  );
}
