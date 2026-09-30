import type { LucideIcon } from "lucide-react";

interface BadgeProps {
  title: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  iconFill?: string;
}

const Badge = ({
  title,
  icon: Icon,
  className,
  iconClassName,
  iconFill,
}: BadgeProps) => {
  return (
    <button type="button" className={className}>
      <Icon size={16} className={iconClassName} fill={iconFill} />

      <p className="font-satoshi-500 text-[16px] leading-[120%] text-shuttle-gray-700">
        {title}
      </p>
    </button>
  );
};

export default Badge;
