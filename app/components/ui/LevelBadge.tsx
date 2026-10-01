import { ChartNoAxesColumnIncreasing } from "lucide-react";

export default function LevelBadge({ level }: { level: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-3xl  bg-shuttle-gray-50 px-3 py-1.5 text-shuttle-gray-700 font-satoshi-500 text-[12px] leading-[120%] backdrop-blur-md">
      <div>
        {" "}
        <ChartNoAxesColumnIncreasing
          color="#4B4C53"
          width={12.5}
          height={13.33}
        />
      </div>
      <span>{level}</span>
    </div>
  );
}
