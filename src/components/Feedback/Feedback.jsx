import React from "react";
import AddFeedback from "./AddFeedback";

const Feedback = () => {
  return (
    <>
      <div className="bg-[#F4F6FC]">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-28 py-32">
            <div className="col-span-1 ">
              <h1 className="mb-4 text-[38px] text-[#282938] font-semibold leading-14">
               What our clients say about us
              </h1>
              <p className="text-[18px] text-gray-600 font-medium leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>
            <div className="col-span-2">
              <AddFeedback/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
