import React from "react";
import QuestionsBox from "./QuestionsBox";

const Questions = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex flex-col gap-10 md:grid grid-cols-3 md:gap-8">
        <div>
          <h1 className="mb-4 text-[38px] text-[#282938] font-semibold leading-[1.3]">
            Frequently <span className="block">asked questions</span>
          </h1>
          <p className="text-[18px] text-[#2405F2] font-medium leading-8 cursor-pointer hover:underline">
            Contact us for more info
          </p>
        </div>

        <div className="col-span-2">
            <QuestionsBox
            Number={1}
            h1={"How much time does it take?"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <QuestionsBox
            Number={2}
            h1={"What is your class naming convention?"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <QuestionsBox
            Number={3}
            h1={"How do you communicate?"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <QuestionsBox
            Number={4}
            h1={"I have a bigger project. Can you handle it?"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <QuestionsBox
            Number={5}
            h1={"What is your class naming convention?"}
            p={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
        </div>
      </div>
    </div>
  );
};

export default Questions;
0