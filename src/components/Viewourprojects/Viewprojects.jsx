import React from "react";
import ArrowBTN from "../Banner/ArrowBTN";
import Card from "../../assets/ViewProject/Card.png";
import Card2 from "../../assets/ViewProject/Card2.png";
import Card3 from "../../assets/ViewProject/Card3.png";

const Viewprojects = () => {
  return (
    <>
      <div className="container mx-auto mt-28">
        <div className="flex justify-between ">
          <h1 className="text-5xl font-semibold leading-16 text-[#282938]">
            View our projects
          </h1>
          <ArrowBTN className="!text-[#282938] fill-current hover:!text-black">
            View More
          </ArrowBTN>
        </div>
        <div className="grid grid-cols-3 gap-8 py-16 group group group">
          <div className="col-span-2 relative group">
            {/* Background Image */}
            <img
              className="h-full w-[883px] rounded-[11px]"
              src={Card}
              alt=""
            />

            {/* Overlay + Text */}
            <div
              className="
                          absolute inset-0 rounded-[11px] overflow-hidden
                          before:content-[''] before:absolute before:inset-0
                          before:w-0 before:h-full before:rounded-[11px]
                          before:bg-gradient-to-b before:from-[#1C1E53]/60 before:to-[#1C1E53]/90
                          before:transition-all before:duration-500 group-hover:before:w-[883px]
                          flex flex-col justify-end items-start px-10 py-10
                        "
            >
              <div
                className="
                            opacity-0 transition-all duration-500 ease-in-out
                            group-hover:opacity-100 group-hover:translate-y-0
                            text-white z-10 translate-y-2
                          "
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold leading-[35px] ">
                    Workhub office Webflow Design
                  </h1>
                  <p className="text-[16px] leading-7 font-medium w-[70%]">
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam.
                  </p>
                  <ArrowBTN className="!font-medium !text-[16px] !leading-7 !text-[#FCD980]">
                    View project
                  </ArrowBTN>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-8 ">
            <div className="relative group w-full h-[284px] rounded-[11px] overflow-hidden">
              {/* Background Image */}
              <img
                className="w-full h-full object-cover rounded-[11px]"
                src={Card2}
                alt="Project"
              />

              {/* Overlay + Text */}
              <div
                className="
                            absolute inset-0 rounded-[11px] overflow-hidden
                            before:content-[''] before:absolute before:inset-0
                            before:w-full before:h-0 before:rounded-[11px]
                            before:bg-gradient-to-b before:from-[#1C1E53]/60 before:to-[#1C1E53]/90
                            before:transition-all before:duration-500 group-hover:before:h-full
                            flex flex-col justify-end items-start px-8 py-8
                          "
              >
                <div
                  className="
                              opacity-0 translate-y-4 transition-all duration-500 ease-in-out
                              group-hover:opacity-100 group-hover:translate-y-0
                              text-white z-10
                            "
                >
                  <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-semibold leading-[30px]">
                      Unisaas Website Design
                    </h1>
                    <ArrowBTN className="!font-medium !text-[16px] !leading-7 !text-[#FCD980]">
                      View project
                    </ArrowBTN>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group w-full h-[284px] rounded-[11px] overflow-hidden">
              {/* Background Image */}
              <img
                className="w-full h-full object-cover rounded-[11px]"
                src={Card3}
                alt="Project"
              />

              {/* Overlay + Text */}
              <div
                className="
                        absolute inset-0 rounded-[11px] overflow-hidden
                        before:content-[''] before:absolute before:inset-0
                        before:w-full before:h-0 before:rounded-[11px]
                        before:bg-gradient-to-b before:from-[#1C1E53]/60 before:to-[#1C1E53]/90
                        before:transition-all before:duration-500 group-hover:before:h-full
                        flex flex-col justify-end items-start px-8 py-8
                      "
              >
                <div
                  className="
                          opacity-0 translate-y-4 transition-all duration-500 ease-in-out
                          group-hover:opacity-100 group-hover:translate-y-0
                          text-white z-10
                        "
                >
                  <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-semibold leading-[30px]">
                      Unisaas Website Design
                    </h1>
                    <ArrowBTN className="!font-medium !text-[16px] !leading-7 !text-[#FCD980]">
                      View project
                    </ArrowBTN>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewprojects;
