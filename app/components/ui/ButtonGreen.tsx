import { ButtonHTMLAttributes } from "react";

interface ButtonGreenProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export function ButtonGreen({ label = "Search", ...props }: ButtonGreenProps) {
  return (
    <button
      {...props}
      className="h-[52px] px-8 bg-electric-lime-400 font-satoshi-500 hover:bg-electric-lime-400/80 rounded-full cursor-pointer"
    >
      {label}
    </button>
  );
}
