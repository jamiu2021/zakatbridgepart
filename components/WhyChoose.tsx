import Image from "next/image";
import workingImg from "@/assets/working-on-computer.png";
import WhyChooseItems from "./WhyChooseItems";
const WhyChoose = () => {
  return (
    <div className="p-4 md:p-14 w-full ">
      <div className="flex flex-col items-center justify-center pb-16">
        <h1 className="text-[30px] md:text-[50px] text-center font-bold">
          Why Choose <span className="text-[#0098CC]">Zakat</span>
          <span className="text-[#F58601] ml-2">Bridge</span>?
        </h1>
        <p className="text-lg font-medium text-[#232323]  text-center">
          Zakat Bridge is a tech-powered platform designed to simplify zakat
          management while maximizing its spiritual and social impact.
        </p>
      </div>
      <div className="  flex flex-col-reverse lg:grid lg:grid-cols-2   md:gap-[69px] ">
        <div className="py-10">
        <Image src={workingImg} alt="working-img" width={603} height={476} />
        </div>
        <WhyChooseItems />
        
      </div>
    </div>
  );
};
export default WhyChoose;
