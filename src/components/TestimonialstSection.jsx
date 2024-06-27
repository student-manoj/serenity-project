"use client";

import { TestimonialstData } from "@/utils/TestimonialstData";
import Heading from "./Heading";
import TestimonialstCard from "./TestimonialstCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#FF7A00",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#FF7A00",
      }}
      onClick={onClick}
    />
  );
}

const TestimonialstSection = () => {
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#ff7b0006] py-16">
        <div className="container mx-auto px-4">
          <Heading
            title="OUR TESTIMONIALS"
            titleName="What Our Client Tell About?"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
          />

          <div className="py-14">
            <Slider {...settings}>
              {TestimonialstData.slice(0, 2).map((val) => (
                <div key={val.id} className="px-5">
                  <TestimonialstCard {...val} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialstSection;
