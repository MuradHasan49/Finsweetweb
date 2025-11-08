import React from "react";
import logo from "../../assets/BannerImg/logo1.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1C1E53]">
        <div className="container">
          <div className=" flex flex-col items-center gap-10 md:flex md:flex-row md:items-start md:gap-[142px] py-24">
            <div className=" flex flex-col gap-20 ">
              <div className="flex flex-col items-center md:items-start gap-6">
                <img className="w-[156px] h-[38px]" src={logo} alt="" />
                <p className="text-[16px] font-medium leading-7 text-white">
                  We are always open to discuss your project and{" "}
                  <span className="md:block">
                    improve your online presence.
                  </span>
                </p>
              </div>
              <div className="flex gap-6 py-4 px-2 bg-amber-300">
                <div className="">
                  <h1>Email me at</h1>
                  <p>contact@website.com</p>
                </div>
                <div className="">
                  <h1>Call us</h1>
                  <p>0927 6277 28525</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-5xl leading-16 font-semibold text-white">
                Lets Talk!
              </h1>
              <p className="text-[16px] leading-7 text-[#F4F6FC] mt-4">
                We are always open to discuss your project,{" "}
                <span className="md:block">
                  improve your online presence and help with your
                </span>{" "}
                UX/UI design challenges.
              </p>
              <div className=" flex gap-9 mt-7">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1C1E53]  hover:scale-110 hover:bg-black  hover:text-white transition duration-300"
                >
                  <FaFacebookF className="text-lg" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1C1E53] hover:scale-110 hover:bg-black hover:text-white transition duration-300"
                >
                  <FaTwitter className="text-lg" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1C1E53] hover:scale-110 hover:bg-black hover:text-white transition duration-300"
                >
                  <FaInstagram className="text-lg" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1C1E53] hover:scale-110 hover:bg-black hover:text-white transition duration-300"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
