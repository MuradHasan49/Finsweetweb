import React from "react";
import Box from "./Box";
import iocn from "../../assets/Features/Icon.png";
import iocn2 from "../../assets/Features/Icon2.png";
import iocn3 from "../../assets/Features/Icon3.png";
import iocn4 from "../../assets/Features/Icon4.png";
import iocn5 from "../../assets/Features/Icon5.png";
import iocn6 from "../../assets/Features/Icon6.png";

const FeaturesBox = () => {
  return (
    <>
      <div className=" bg-[#F4F6FC]">
        <div className="container  py-32">
          <div className="flex flex-col text-center py-12">
            <h4 className="text-[14px] font-medium leading-7 tex-[#282938] ">
              Features
            </h4>
            <h1 className="tex-[#282938] text-5xl font-semibold leading-16">
              Design that solves{" "}
              <span className="block">problems, one product at</span> a time
            </h1>
          </div>
          <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-8">
            <Box
              icon={iocn}
              h1={"Uses Client First"}
              p={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
            <Box
              icon={iocn2}
              h1={"Two Free Revision Round"}
              p={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
            <Box
              icon={iocn3}
              h1={"Template Customization"}
              p={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
            <Box
              icon={iocn4}
              h1={"24/7 Support"}
              p={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
            <Box
              icon={iocn5}
              h1={"Quick Delivery"}
              p={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
            <Box
              icon={iocn6}
              h1={"Hands-on approach"}
              p={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesBox;
