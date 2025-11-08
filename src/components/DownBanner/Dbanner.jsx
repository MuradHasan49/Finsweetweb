import React from "react";
import BGimg from "../../assets/BannerImg/woman-writing-on-paper-3228878.png";

const Dbanner = () => {
  return (
    <>
      <div className="container  py-32">
        <div className="md:grid grid-cols-2 items-center">
          {/* Left side with background image */}
          <div
            className=" w-full h-full bg-cover bg-center rounded-l-lg md:p-24"
            style={{ backgroundImage: `url(${BGimg})` }}
          >
            <div className="md:w-[446px] h-[334px]">
              <h1 className="font-semibold p-3 text-5xl  md:text-[54px] md:leading-18 text-white">
                Building stellar websites for early
                <span className="md:block"> startups</span>
              </h1>
              <p className=" p-3 md:text-[16px] mt-6 font-medium md:leading-7 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                <span className="md:block">
                  sed do eiusmod tempor incididunt ut labore et dolore{" "}
                </span>{" "}
                magna aliqua ut enim.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="bg-[#1C1E53] rounded-r-lg">
            <div className="p-3 w-ful h-full md:p-24">
              <div className="">
                <h1 className="font-medium text-[32px] leading-12 text-white ">
                  Send inquiry
                </h1>
                <p className="font-medium text-16px] leading-7 mt-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="">
                <div className="bg-transparent mt-10">
                  <div className="">
                    <form className="flex flex-col space-y-6">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          className="w-full p-4 bg-transparent border-2 border-gray-800  text-gray-100 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="w-full p-4 bg-transparent border-2 border-gray-800  text-gray-100 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="figma_url" className="sr-only">
                          Figma URL
                        </label>
                        <input
                          type="url"
                          id="figma_url"
                          name="figma_url"
                          placeholder="Paste your Figma design URL"
                          className="w-full p-4 bg-transparent border-2 border-gray-800  text-gray-100 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-amber-300 text-black font-semibold rounded-full hover:bg-amber-400 focus:outline-nones"
                      >
                        Send an Inquiry
                      </button>
                    </form>
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

export default Dbanner;
