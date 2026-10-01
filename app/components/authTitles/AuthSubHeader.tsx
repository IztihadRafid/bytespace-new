interface AuthSubHeaderProps {
  subtitle: string;
}

export default function AuthSubHeader({ subtitle }: AuthSubHeaderProps) {
  return (
    <p className="font-satoshi-400 text-[18px] text-shuttle-gray-50 leading-[160%]">
      {subtitle}
    </p>
  );
}
