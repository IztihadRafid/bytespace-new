const RevenueBadge = () => {
  return (
    <div className="bg-[#0052FF] text-white p-4 rounded-2xl flex flex-col justify-between gap-3 w-[220px]">
      <div className="flex flex-col gap-0.5">
        <h2 className="font-satoshi-500 text-[14px] leading-[120%] text-white">
          Total Revenue
        </h2>
        <span className="font-satoshi-400 text-[11px] leading-[120%] text-white/80">
          July 1-28
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="font-poppins-600 text-[28px] leading-[120%] tracking-[-0.01em]">
          $120.29
        </p>
        <span className="bg-[#D4FB20] text-black font-satoshi-700 text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap">
          +12$
        </span>
      </div>
      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div className="h-full bg-[#D4FB20] w-[55%] rounded-full" />
      </div>
    </div>
  );
};

export default RevenueBadge;
