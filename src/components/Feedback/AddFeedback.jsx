import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "red",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        right: "10px",
        zIndex: 10,
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "green",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        left: "10px",
        zIndex: 10,
      }}
    />
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
    <div className="slider-container w-96 mx-auto mt-10">
      <Slider {...settings}>
     <div className="">
      <h1>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h1>

      <img src="" alt="" />
     </div>
      </Slider>
    </div>
  );
}

export default FeedbackSlider;
