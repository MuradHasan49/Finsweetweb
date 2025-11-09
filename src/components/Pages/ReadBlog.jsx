import React from "react";
import BannerImg from "../../assets/Blog/people-working-in-front-of-computer-3182763.png";
import Heading from "../Global/Heading";
import Photo from "../../assets/Blog/photo-of-people-near-wooden-table-3184418.jpg";

const ReadBlog = () => {
  return (
    <>
      <div className="container py-32">
        <div className="">
          <div className="flex flex-col items-center  md:gap-4">
            <Heading
              className="mx-auto"
              Heading={"A UX Case Study on Creating"}
            />
            <Heading
              className="mx-auto"
              Heading={"a Studious Environment for Students"}
            />

            <p className="text-[16px] font-medium leading-7 text-[#282938]">
              Andrew Jonson Posted on 27th January 2021
            </p>
          </div>
          <div className="mt-8">
            <img src={BannerImg} alt="" />
          </div>
        </div>

        <div className="">
          <div className="py-16">
            <div className="">
              <div className="flex flex-col items-center md:items-start md:ml-52 mb-8">
                <h1 className="font-semibold text-[38px] leading-14 text-[#282938]">
                  Lorem ipsum dolor sit amet, consectetur <span className="md:block">adipiscing elit.</span>
                </h1>
              </div>
              <div className="flex flex-col gap-8 items-center">
                <p className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <p className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col items-center md:items-start md:ml-52 mb-8">
                <h1 className="font-semibold text-[38px] leading-14 text-[#282938]">
                  Ut enim ad minim veniam, quis nostrud.
                </h1>
              </div>
              <div className="flex flex-col gap-8 items-center ">
                <p className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <ul className="list-disc list-inside">
                  <li className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                  <li className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                  <li className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                </ul>
                <p className="md:w-[842px] text-[16px] leading-7 opacity-70 text-[#282938]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>

                <img src={Photo} alt="" />

                <div className="md:w-[842px]">
                  <div className="flex flex-col items-center md:items-start mb-8">
                    <h1 className="font-semibold text-[38px] leading-14 text-[#282938]">
                      Ut enim ad minim veniam, quis nostrud.

                    </h1>
                  </div>
                  <p className=" text-[16px] leading-7 opacity-70 text-[#282938]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
