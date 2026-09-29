import { partnerLogos } from "@/lib/data";
import Image from "next/image";

const MarqueeSection = () => {
  return (
    <section className="bg-shuttle-gray-50 py-20 w-full">
      <div className="mx-auto flex  flex-wrap items-center justify-center gap-18  ">
        {partnerLogos.map((src) => (
          <div key={src} className=" ">
            <Image src={src} alt="Partner logo" width={167} height={54} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
