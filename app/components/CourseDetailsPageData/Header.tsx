interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return (
    <h2 className="text-xl font-poppins-600 leading-[120%] tracking-[-1%] text-shuttle-gray-950">
      {text}
    </h2>
  );
}
