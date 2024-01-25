import PrimaryBtn from "@/components/btn's/PrimaryBtn";
import BigSectionWrapper from "@/components/wrapper/BigSectionWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import vector from "../../assets/landing/progress-shape.png";
import me from "../../assets/landing/me.png";

const Hero = () => {
  return (
    <div className="py-[50px]">
      <BigSectionWrapper>
        <div className="grid grid-cols-12 grid-rows-2">
          <div className="col-span-4">
            <h1 className="text-white opacity-30 text-[54px]">Hello, I'm</h1>
            <h1 className="text-primary text-[65px] font-semibold">
              Roy C. Jones
            </h1>
            <h1 className="text-white text-[65px] -mt-[20px]">web designer</h1>
            <p className="text-white opacity-50 font-medium mt-[30px]">
              We denounce with righteous indignation dislike <br /> demoralized
              by the charms of pleasure
            </p>
            <div className="flex items-center gap-[35px] mt-[35px]">
              <PrimaryBtn to={"example"}>Hire Me</PrimaryBtn>
              <Link
                href={"example"}
                className="font-medium rounded-[15px] flex items-center gap-[2px] text-white text-[15px] group underline hover:text-[#c9f31d] transition-all duration-500"
              >
                Download Resume
                <MdKeyboardArrowRight className="group-hover:translate-x-[2px] transition-all duration-500 group-hover:text-[#c9f31d]" />
              </Link>
            </div>
          </div>
          <div className="col-span-5">
            <div className="relative max-w-[575px] rounded-bl-[590px] rounded-br-[590px] mx-auto text-center">
              <div className="absolute w-[425px] h-[425px] bg-black rounded-[50%] -z-[2] left-[5%] top-[4%]"></div>
              <Image
                className="z-[101] absolute left-[8%] bottom-[0px] max-w-[100%]"
                src={me}
                width={470}
                height={600}
              />
              <div className="w-[100%]">
                <Image src={vector} width={600} height={500} />
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-green-500">f</div>
        </div>
      </BigSectionWrapper>
    </div>
  );
};

export default Hero;
