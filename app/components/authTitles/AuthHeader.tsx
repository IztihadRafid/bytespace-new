interface AuthHeaderProps {
  title: string;
}

export default function AuthHeader({ title }: AuthHeaderProps) {
  return (
    <h1 className="font-poppins-600 text-shuttle-gray-50 text-[20px] leading-[120%] tracking-[-1%]">
      {title}
    </h1>
  );
}
