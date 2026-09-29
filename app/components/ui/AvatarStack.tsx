import Image from "next/image";

const avatars = [
  "/assets/peopleprofile/p1.png",
  "/assets/peopleprofile/p2.png",
  "/assets/peopleprofile/p3.png",
  "/assets/peopleprofile/p4.png",
  "/assets/peopleprofile/p5.png",
];

export default function AvatarStack({ count = "26+" }: { count?: string }) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <div
          key={src}
          className="relative size-7 overflow-hidden rounded-full border-2 border-white"
          style={{ marginLeft: i === 0 ? 0 : -10 }}
        >
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
