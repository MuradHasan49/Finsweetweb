import React from "react";
import Slider from "react-slick";
import FeedbackImg from "../../assets/Feedback/profile.png"; // your image

const FeedbackSlider = () => {
  const slides = [
    {
      text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      img: FeedbackImg,
    },
    {
      text: '"Their attention to detail and understanding of our product is impressive."',
      img: FeedbackImg,
    },
    {
      text: '"Excellent communication and fast delivery every time!"',
      img: FeedbackImg,
    },
    {
      text: '"A reliable team that delivers quality work."',
      img: FeedbackImg,
    },
  ];

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col items-center text-center gap-8 px-6 md:px-16">
              <p className="text-lg md:text-2xl font-medium text-[#282938] leading-relaxed max-w-3xl">
                {slide.text}
              </p>

              <div className="flex flex-col items-center gap-4 mt-8">
                <img
                  src={slide.img}
                  alt={`Feedback ${index}`}
                  className="w-20 h-20 rounded-full shadow-lg"
                />
                <h4 className="font-semibold text-[#1C1E53] text-lg">
                  Client {index + 1}
                </h4>
                <p className="text-sm text-gray-500">Happy Customer</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
