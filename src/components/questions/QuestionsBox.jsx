import React, { useState } from "react";

const QuestionsBox = ({ h1, p, Number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="border-b border-gray-200 py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-6">
            <span className="text-[#2405F2] font-medium text-lg">{Number}</span>
            <h1 className="font-bold text-[20px] text-[#282938]">{h1}</h1>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-6 h-6 text-[#2405F2] transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        >
          <p className="font-medium text-[18px] text-gray-600">{p}</p>
        </div>
      </div>
    </>
  );
};

export default QuestionsBox;
