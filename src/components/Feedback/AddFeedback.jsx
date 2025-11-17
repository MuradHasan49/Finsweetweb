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
        <div><h3 className="text-center">11111111 <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></h3></div>
        <div><h3 className="text-center">11111111 <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></h3></div>
        <div><h3 className="text-center">11111111 <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></h3></div>
        <div><h3 className="text-center">11111111 <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></h3></div>
        <div><h3 className="text-center">11111111 <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></h3></div>
      </Slider>
    </div>
  );
}

export default FeedbackSlider;
