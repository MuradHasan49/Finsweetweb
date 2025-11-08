import React, { useState } from "react";
import FeedbackImg from "../../assets/Feedback/profile.png"; // your image

const FeedbackSlider = () => {
  const slides = [
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1 + slides.length) % slides.length
    );
    console.log(handlePrev);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % slides.length);
    console.log(handleNext);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col  p-8">
            <p className="md:text-3xl font-medium text-[#282938] max-w-2xl">
              {slide.text}
            </p>

            <div className="flex justify-between items-center mt-12 gap-6">
              <div className="mb-10">
                <img src={slide.img} alt={slide.name} className=" shadow-lg" />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className=" transform -translate-y-1/2"
                >
                  <svg
                    className="w-10 h-10 bg-blue-500 text-white fill-current rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320zM576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320zM188.7 308.7C182.5 314.9 182.5 325.1 188.7 331.3L292.7 435.3C297.3 439.9 304.2 441.2 310.1 438.8C316 436.4 320 430.5 320 424L320 352L424 352C437.3 352 448 341.3 448 328L448 312C448 298.7 437.3 288 424 288L320 288L320 216C320 209.5 316.1 203.7 310.1 201.2C304.1 198.7 297.2 200.1 292.7 204.7L188.7 308.7z" />
                  </svg>
                </button>

                {/* Right button */}
                <button
                  onClick={handleNext}
                  className=" transform -translate-y-1/2"
                >
                  <svg
                    className="w-10 h-10 bg-blue-500 text-white fill-current rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM451.3 331.3C457.5 325.1 457.5 314.9 451.3 308.7L347.3 204.7C342.7 200.1 335.8 198.8 329.9 201.2C324 203.6 320 209.5 320 216L320 288L216 288C202.7 288 192 298.7 192 312L192 328C192 341.3 202.7 352 216 352L320 352L320 424C320 430.5 323.9 436.3 329.9 438.8C335.9 441.3 342.8 439.9 347.3 435.3L451.3 331.3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left button */}
    </div>
  );
};

export default FeedbackSlider;
