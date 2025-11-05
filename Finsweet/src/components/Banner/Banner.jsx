import React from "react";
import Button from "../Global/Button";
import ArrowBTN from "./ArrowBTN";
import BannerImg from "../../assets/BannerImg/Illustration.svg";

const Banner = () => {
  return (
    <>
      <div className="bg-[#1C1E53] py-32">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-15">
            <div className="w-[582px] h-full">
              <h1 className="text-[54px] font-semibold leading-[74px] text-white">
                Building stellar websites for early startups
              </h1>
              <p className="opacity-70 mt-6 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="mt-12">
                <div className="flex gap-10">
                  <Button className="bg-[#FCD980] ">View our work</Button>
                  <ArrowBTN>View Pricing</ArrowBTN>
                </div>
              </div>
            </div>
            <div className="">
              <img className="w-full h-full" src={BannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
