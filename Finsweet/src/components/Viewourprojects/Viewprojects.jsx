import React from "react";
import ArrowBTN from "../Banner/ArrowBTN";
import Card from "../../assets/ViewProject/Card.png";
import Card2 from "../../assets/ViewProject/Card2.png";
import Card3 from "../../assets/ViewProject/Card3.png";

const Viewprojects = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-5xl font-semibold leading-16 text-[#282938]">
            View our projects
          </h1>
          <ArrowBTN className="!text-[#282938] fill-current hover:!text-black">
            View More
          </ArrowBTN>
        </div>
        <div className="grid grid-cols-3 gap-8 py-16">
          <div className="col-span-2">
            <img className="h-full w-[883px]" src={Card} alt="" />
          </div>
          <div className=" grid grid-cols-1 gap-8">
            <div>
              <img className="w-full h-[284px]" src={Card2} alt="" />
            </div>
            <div>
              <img className="w-full h-[284px]" src={Card3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewprojects;
