import React from "react";
import Heading from "../Global/Heading";
import BannerImg from "../../assets/Blog/people-working-in-front-of-computer-3182763.png";
import ArrowBTN from "../Banner/ArrowBTN";
import Blog from "../Blog/Blog";

const BlogPage = () => {
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
          <div className="flex flex-col items-center">
            <p className="md:w-[831px] mt-12 opacity-70 text-[16px] font-medium leading-7 text-[#282938]">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the{" "}
              <span className="md:block">
                {" "}
                stars had ceased to twinkle. By the same illusion which lifts
                the horizon of the sea to the level of the
              </span>
            </p>
            <p className="opacity-70 text-[16px] font-medium leading-7 text-[#282938]">
              {" "}
              spectator on a hillside.
            </p>
            <ArrowBTN className={"mt-4 !text-[#2405F2]"}>Read more</ArrowBTN>
          </div>
        </div>

        <div className="py-32">
          <Blog
          className={"!items-center"}
          />
          <Blog
          BlogHeading={"hidden"}
          className={"!items-center mt-16"}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
