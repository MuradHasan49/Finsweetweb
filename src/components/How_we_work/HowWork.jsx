import React from "react";
import ArrowBTN from "../Banner/ArrowBTN";
import Box from "./Box";
import pointer1 from "../../assets/HowWork/pointer1.png"
import pointer2 from "../../assets/HowWork/pointer2.png"
import pointer3 from "../../assets/HowWork/pointer3.png"
import pointer4 from "../../assets/HowWork/pointer4.png"

const HowWork = () => {
  return (
    <>
    <div className=" bg-[#F4F6FC]">
      <div className="container ">
        <div className="flex flex-col items-center md:grid grid-cols-2 md:items-start gap-[142px] py-16 md:py-32">
          <div className="w-[405px] h-[184px] flex flex-col gap-4 items-center md:items-start">
            <h1 className=" text-5xl font-semibold leading-16 text-[#282938] ">
              How we work
            </h1>
            <p className="text-[#282938]">
              Lorem ipsum dolor sit amet, consectetur <span className="block">adipiscing elit, sed do
              eiusmod tempor.</span>
            </p>
            <ArrowBTN className={`!text-[#2405F2] text-[18px] leading-8 font-medium`}>Get in touch with us</ArrowBTN>
          </div>
          <div className="flex flex-col  md:grid grid-cols-2">
            <Box src={pointer1} h1={"Strategy"} />
            <Box src={pointer2} h1={"Wireframing"} />
            <Box src={pointer3} h1={"Design"} />
            <Box src={pointer4} h1={"Development"} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HowWork;
