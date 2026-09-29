import type { LucideIcon } from "lucide-react";

interface BadgeProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

const Badge = ({ title, icon: Icon, className }: BadgeProps) => {
  return (
    <button type="button" className={className}>
      <Icon color="#242528" size={16} />
      <p className="font-satoshi-500 leading-[120%] test-[16px] text-shuttle-gray-700">
        {title}
      </p>
    </button>
  );
};

export default Badge;
