const LearningProgress = () => {
  return (
    <div className="border border-shuttle-gray-200 rounded-2xl p-4 w-[723px] bg-white mb-20">
      <span className="font-satoshi-500 text-[14px] leading-[120%] text-shuttle-gray-950">
        Learning Progress
      </span>
      <div className="text-[36px] font-poppins-600 leading-[120%] text-shuttle-gray-950 my-2">
        55%
      </div>
      <div className="w-full bg-shuttle-gray-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-electric-lime-400 h-2.5 rounded-full"
          style={{ width: "55%" }}
        ></div>
      </div>
    </div>
  );
};

export default LearningProgress;
