import React from "react";
import ArrowBTN from "../Banner/ArrowBTN";
import Box from "./Box";

const HowWork = () => {
  return (
    <>
    <div className=" bg-[#F4F6FC]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap[142px] py-32">
          <div className="w-[405px] h-[184px] flex flex-col gap-4 ">
            <h1 className="text-5xl font-semibold leading-16 text-[#282938] ">
              How we work
            </h1>
            <p className="text-[#282938]">
              Lorem ipsum dolor sit amet, consectetur <span className="block">adipiscing elit, sed do
              eiusmod tempor.</span>
            </p>
            <ArrowBTN className={`!text-[#2405F2] text-[18px] leading-8 font-medium`}>Get in touch with us</ArrowBTN>
          </div>
          <div className="grid grid-cols-2">
            <Box h1={"Strategy"} />
            <Box h1={"Wireframing"} />
            <Box h1={"Design"} />
            <Box h1={"Development"} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HowWork;
