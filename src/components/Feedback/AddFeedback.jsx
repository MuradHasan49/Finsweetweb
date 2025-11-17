import React from "react";
import Pic from "../../assets/Feedback/profile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[200px] right-20 flex justify-center items-center bg-gray-500 w-10 h-10 rounded-full z-10 cursor-pointer hover:bg-gray-700"
    >
      <span className="text-white text-xl font-bold"><IoIosArrowForward /></span>
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-[200px] left-[610px] flex justify-center items-center bg-gray-500 w-10 h-10 rounded-full z-10 cursor-pointer hover:bg-gray-700"
    >
      <span className="text-white text-xl font-bold"><IoIosArrowBack /></span>
    </div>
  );
}

function FeedbackSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex flex-col "
          >
            <h1 className="text-gray-700 text-[32px] font-medium leading-12 ">
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h1>
            <img
              className="mt-10"
              src={Pic}
              alt={`Profile ${item}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeedbackSlider;
