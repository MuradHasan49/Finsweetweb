import React from "react";
import Heading from "../Global/Heading";
import AbImg from "../../assets/AboutUs/group-of-people-sitting-indoors-3184360.png";
import AbImg2 from "../../assets/AboutUs/man-in-blue-jacket-looking-at-white-board-7413916.png";
import AbImg3 from "../../assets/AboutUs/Line and Icon.png";
import AbImg4 from "../../assets/AboutUs/a-man-standing-in-an-office-7792811.png";
import AbImg5 from "../../assets/AboutUs/photo-of-women-at-the-meeting-3810789.png";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Box from "../Features/Box";
import iocn from "../../assets/Features/Icon.png";
import iocn6 from "../../assets/Features/Icon6.png";
import iocn3 from "../../assets/Features/Icon3.png";
import Dlogo from "../../assets/AboutUs/Logo Section.png";

import FooterImg from "../../assets/AboutUs/man-in-black-suit-holding-a-calling-card-3785104.png";
import FooterImg2 from "../../assets/AboutUs/serious-man-3760373.png";
import FooterImg3 from "../../assets/AboutUs/man-in-white-shirt-wearing-blue-bucket-hat-6626874.png";
import FooterImg4 from "../../assets/AboutUs/transgender-model-touching-forehead-in-neon-light-7613875.png";

const AboutUs = () => {
  return (
    <>
      <div className="container  ">
        {/*About us*/}
        <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg mb-2 leading-8  text-[#282938]">
              About us
            </span>
            <div className=" md:w-[595px]">
              <Heading Heading={"Our designs solve problems"} />
            </div>
            <p className="md:w-[484px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="">
            <img src={AbImg} alt="" />
          </div>
        </div>
        {/*who we are*/}
        <div className="bg-[#F4F5F5] flex flex-col gap-8 md:flex md:gap-0">
          <div className="flex flex-col items-center gap-8 md:gap-0 md:flex md:flex-row md:items-start justify-between md:p-20">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[16px] leading-7 font-medium  text-[#282938]">
                Who we are
              </span>
              <h1 className="font-semibold text-[38px] leading-14 text-[#282938]">
                Goal focussed
              </h1>
              <p className=" md:w-[515px] mt-4 text-sm leading-7 text-[#282938 ] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="opacity-0 text-[16px] leading-7 font-medium  text-[#282938]">
                Who we are
              </span>
              <h1 className="font-semibold text-[35px] md:text-[38px] leading-14 text-[#282938]">
                Continuous improvement
              </h1>
              <p className="md:w-[515px] mt-4 text-sm leading-7 text-[#282938 ] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="">
            <img src={AbImg2} alt="" />
          </div>
        </div>
        {/*The process we follow*/}

        <div className="py-32">
          <div className="flex flex-col items-center">
            <Heading Heading={"The process we follow"} />
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:gap-0  justify-between">
            <div className="mt-12 flex flex-col items-center md:items-start ">
              <img src={AbImg3} alt="" />
              <h1 className="mt-8 text-[24px] leading-8 font-medium text-[#282938 ]">
                Planning
              </h1>
              <p className="mt-2 w-[322px] md:w-[272px] text-[16px] leading-7 text-[#282938 ] opacity-70">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="mt-12 flex flex-col items-center md:items-start ">
              <img src={AbImg3} alt="" />
              <h1 className="mt-8 text-[24px] leading-8 font-medium text-[#282938 ]">
                Conception
              </h1>
              <p className="mt-2 w-[322px] md:w-[272px] text-[16px] leading-7 text-[#282938 ] opacity-70">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="mt-12 flex flex-col items-center md:items-start ">
              <img src={AbImg3} alt="" />
              <h1 className="mt-8 text-[24px] leading-8 font-medium text-[#282938 ]">
                Design
              </h1>
              <p className="mt-2 w-[322px] md:w-[272px] text-[16px] leading-7 text-[#282938 ] opacity-70">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
            <div className="mt-12 flex flex-col items-center md:items-start ">
              <img src={AbImg3} alt="" />
              <h1 className="mt-8 text-[24px] leading-8 font-medium text-[#282938 ]">
                Development
              </h1>
              <p className="mt-2 w-[322px] md:w-[272px] text-[16px] leading-7 text-[#282938 ] opacity-70">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EEF4FA]">
        <div className="container">
          <div className="">
            <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg mb-2 leading-8  text-[#282938]">
                  Our Mission
                </span>
                <div className=" md:w-[595px]">
                  <Heading Heading={"Inspire, Innovate, Share"} />
                </div>
                <p className="md:w-[623px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="">
                <img src={AbImg4} alt="" />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
              <div className="">
                <img src={AbImg5} alt="" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg mb-2 leading-8  text-[#282938]">
                  Our Vision
                </span>
                <div className=" md:w-[595px]">
                  <Heading Heading={"Laser focus"} />
                </div>
                <p className="md:w-[623px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-32">
        <div className="flex flex-col items-center">
          <Heading Heading={"The benefits of working "} />
          <Heading Heading={"with us"} />
        </div>
        <div className="md:flex justify-between py-12">
          <Box
            className={"bg-blue-100/40"}
            icon={iocn6}
            h1={"Uses Client First"}
            p={
              "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            }
          />
          <Box
            className={"bg-blue-100/40"}
            icon={iocn3}
            h1={"Uses Client First"}
            p={
              "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            }
          />
          <Box
            className={"bg-blue-100/40"}
            icon={iocn}
            h1={"Uses Client First"}
            p={
              "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            }
          />
        </div>
        <div className="">
          <img src={Dlogo} alt="" />
        </div>
      </div>
      {/*Meet our team*/}
      <div className="bg-[#F4F6FC]">
        <div className="container py-32">
          <div className="flex flex-col items-center">
            <Heading Heading={"Meet our team"} />
          </div>

          <div className=" flex flex-col items-center md:flex md:flex-row justify-between">
            <div className="flex  items-center bg-[#f7f9fc] py-12">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 w-[280px] text-center group">
                {/* Profile Image Wrapper */}
                <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden group">
                  <img
                    src={FooterImg}
                    alt="/"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center mt-20 justify-center gap-4">
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  John Smith
                </h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>

            <div className="flex  items-center bg-[#f7f9fc] py-12">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 w-[280px] text-center group">
                {/* Profile Image Wrapper */}
                <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden group">
                  <img
                    src={FooterImg}
                    alt="/"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center mt-20 justify-center gap-4">
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  John Smith
                </h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>

            <div className="flex  items-center bg-[#f7f9fc] py-12">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 w-[280px] text-center group">
                {/* Profile Image Wrapper */}
                <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden group">
                  <img
                    src={FooterImg}
                    alt="/"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center mt-20 justify-center gap-4">
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  John Smith
                </h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>

            <div className="flex  items-center bg-[#f7f9fc] py-12">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 w-[280px] text-center group">
                {/* Profile Image Wrapper */}
                <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden group">
                  <img
                    src={FooterImg}
                    alt="/"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center mt-20 justify-center gap-4">
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg hover:text-indigo-200 transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  John Smith
                </h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
