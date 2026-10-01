const YeartoDate = () => {
  return (
    <div className="bg-[#0052FF] text-white p-4 rounded-2xl flex flex-col justify-between gap-3 w-[160px] h-[160px]">
      <div className="flex flex-col gap-0.5">
        <h2 className="font-satoshi-500 text-[14px] leading-[120%] text-white">
          Year to Date
        </h2>
        <span className="font-satoshi-400 text-[11px] leading-[120%] text-white/80">
          2023
        </span>
      </div>
      <p className="font-poppins-600 text-[26px] leading-[120%] tracking-[-0.01em]">
        $1,200.38
      </p>
      <div className="self-start">
        <span className="bg-[#D4FB20] text-black font-satoshi-700 text-[11px] px-2.5 py-1 rounded-full inline-block">
          +12$
        </span>
      </div>
    </div>
  );
};

export default YeartoDate;
