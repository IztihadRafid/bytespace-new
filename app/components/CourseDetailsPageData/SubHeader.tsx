interface SubHeaderProps {
  text: string;
}

export default function SubHeader({ text }: SubHeaderProps) {
  return (
    <p className="font-satoshi-400 text-[16px] leading-[160%] text-shuttle-gray-700">
      {text}
    </p>
  );
}
