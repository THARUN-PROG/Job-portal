import React from "react";
import { useSelector } from "react-redux";
import TestimonialCarousel from "./cards/TestimonialCarousel";

const Testimonials = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className={` ${
        theme === "dark" && "bg-zinc-900 text-white"
       } w-full bg-gradient-to-r from-zinc-900/30 flex flex-col `}
    >
      <p className="text-3xl max-lg:text-xl font-semibold p-4 md:px-24">
        Success stories.
      </p>
      <div className="testimonialContainer py-8 w-fit">
        <TestimonialCarousel autoSlide autoSlideInterval={8000}>
          <p className="w-screen">Test 1</p>
          <p className="w-screen">Test 2</p>
          <p className="w-screen">Test 3</p>
          <p className="w-screen">Test 4</p>
        </TestimonialCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
