import sp1 from "@/public/assets/becomeCreatorImages/sp1.png";
import sp2 from "@/public/assets/becomeCreatorImages/sp2.png";
import sp3 from "@/public/assets/becomeCreatorImages/sp3.png";
import c1 from "@/public/assets/becomeCreatorImages/c1.png";
import r1 from "@/public/assets/becomeCreatorImages/r1.png";
import t1 from "@/public/assets/becomeCreatorImages/t1.png";
import t2 from "@/public/assets/becomeCreatorImages/t2.png";
import Image from "next/image";
import { ButtonGreen } from "../ui/ButtonGreen";
const BecomeCreator = () => {
  return (
    <section className="bg-brand h-[488px] ">
      <div className="relative ">
        <div className="absolute top-0">
          <Image src={sp1} alt="sp1"></Image>
        </div>
        <div className="absolute left-50">
          <Image src={sp2} alt="sp2"></Image>
        </div>
        <div className="absolute top-10 right-45">
          <Image src={t1} alt="t1"></Image>
        </div>
        <div className="absolute top-55 left-0">
          {" "}
          <Image src={t2} alt="t2"></Image>
        </div>
        <div className="absolute top-10 right-0">
          {" "}
          <Image src={r1} alt="r1"></Image>
        </div>
        <div className="absolute top-75 left-10">
          {" "}
          <Image src={c1} alt="c1"></Image>
        </div>
        <div className="absolute top-73 right-0">
          {" "}
          <Image src={sp3} alt="sp3"></Image>
        </div>
      </div>
      <div className="text-center flex flex-col items-center gap-10 text-shuttle-gray-50 p-36">
        <h4 className="font-poppins-600 text-[44px] leading-[120%] tracking-[-1%]">
          Unlock Your Potential as a<br></br> Creator with ByteSpace
        </h4>
        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a<br></br> part of a
          community comprising over 10,000 local and international creators.
          Utilize our Course Editor, and showcase your<br></br> expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <div className="text-shuttle-gray-950 text-[18px]">
          <ButtonGreen className=" " label="Join as Creator"></ButtonGreen>
        </div>
      </div>
    </section>
  );
};

export default BecomeCreator;
