import sp1 from "@/public/assets/becomeCreatorImages/sp1.png";
import sp2 from "@/public/assets/becomeCreatorImages/sp2.png";
import sp3 from "@/public/assets/becomeCreatorImages/sp3.png";
import c1 from "@/public/assets/becomeCreatorImages/c1.png";
import r1 from "@/public/assets/becomeCreatorImages/r1.png";
import t1 from "@/public/assets/becomeCreatorImages/t1.png";
import t2 from "@/public/assets/becomeCreatorImages/t2.png";
import Image from "next/image";
import { ButtonGreen } from "../ui/ButtonGreen";
import Link from "next/link";
const BecomeCreator = () => {
  return (
    <section className="relative bg-brand h-[488px] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0">
          <Image src={sp1} alt="sp1" />
        </div>
        <div className="absolute left-[200px]">
          <Image src={sp2} alt="sp2" />
        </div>
        <div className="absolute top-[40px] right-[180px]">
          <Image src={t1} alt="t1" />
        </div>
        <div className="absolute top-[220px] left-0">
          <Image src={t2} alt="t2" />
        </div>
        <div className="absolute top-[40px] right-0">
          <Image src={r1} alt="r1" />
        </div>
        <div className="absolute top-[300px] left-[40px]">
          <Image src={c1} alt="c1" />
        </div>
        <div className="absolute top-[290px] right-0">
          <Image src={sp3} alt="sp3" />
        </div>
      </div>

      {/* Text Section */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center gap-6 text-shuttle-gray-50 px-6 py-10 max-w-[1200px] mx-auto">
        <h4 className="font-poppins-600 text-[44px] leading-[120%] tracking-[-1%]">
          Unlock Your Potential as a<br /> Creator with ByteSpace
        </h4>
        <p className="max-w-[900px] font-satoshi-400 text-base leading-[150%]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a<br /> part of a
          community comprising over 10,000 local and international creators.
          Utilize our Course Editor, and showcase your
          <br /> expertise by publishing your finest course on the ByteSpace
          Course Library.
        </p>
        <div className="text-shuttle-gray-950 text-[18px]">
          <Link href="/login">
            <ButtonGreen label="Join as Creator" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BecomeCreator;
