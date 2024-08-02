import React from "react";
import CountUp from "react-countup";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { carouselImages, tags } from "../utils";
import Carousel from "./cards/Carousel";
import { animateHover, removeHover } from "../utils/services";

const Hero = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="page1 bg-gradient-to-r from-transparent to-slate-900/30 md:h-screen w-full flex max-lg:flex-col gap-6">
      <div className="heroLeft h-full flex flex-col items-center justify-center w-1/2 max-lg:w-full">
        <div
          className="relative flex leftContent items-start justify-center flex-col md:w-3/4 px-4 gap-4 max-lg:mt-[10vh]"
          onMouseMove={(e) => animateHover(e)}
          onMouseLeave={() => removeHover()}
        >
          <h1 className="z-[12]">Welcome to Jobster</h1>
          <div className="absolute h-1/3 overlayGif md:w-1/2 w-full inset-0 z-[11] scale-75">
            <img
              src={"./images/hoverGif.gif"}
              className="overlayGifImg absolute md:w-[30vw] h-[40vh] max-lg:scale-50 max-lg:-ml-20 max-lg:-mt-20 -mt-12 max-lg:aspect-square opacity-75  rounded-full"
            />
          </div>
          <h1 className="text-6xl max-lg:text-3xl font-bold stroke md:mix-blend-difference z-[12]">
            Find the Perfect Job for You.
          </h1>
          <p className="text-sm max-lg:text-xs z-[12]">
            Search your career opportunities through{" "}
            <CountUp end={28000} duration={5} suffix="+" /> jobs
          </p>
          <div
            className={`rounded-2xl flex border border-slate-500 z-[12] max-lg:flex-col gap-1 p-2 px-4 max-lg:w-full ${
              theme === "dark" && "bg-slate-900/90"
            }`}
          >
            <input
              type="text"
              placeholder="Search for jobs"
              className="bg-transparent outline-none w-full text-sm py-2 z-[12]"
            />
            <div className="flex items-center justify-between gap-4 z-[12]">
              <select
                name="location"
                id=""
                className="bg-gray-400/30 border z-[12] border-slate-500 rounded-md p-1 text-sm font-light outline-none"
              >
                <option
                  className={` ${
                    theme === "dark" ? "bg-slate-800/80" : "bg-slate-400/40"
                  } text-sm py-1 px-1 font-extralight hover:font-medium cursor-pointer hover:bg-slate-900/50`}
                >
                  Location
                </option>
                <option
                  className={` ${
                    theme === "dark" ? "bg-slate-800/80" : "bg-slate-400/40"
                  } text-sm py-1 px-1 font-extralight hover:font-medium cursor-pointer hover:bg-slate-900/50`}
                >
                  Location
                </option>
                <option
                  className={` ${
                    theme === "dark" ? "bg-slate-800/80" : "bg-slate-400/40"
                  } text-sm py-1 px-1 font-extralight hover:font-medium cursor-pointer hover:bg-slate-900/50`}
                >
                  Location
                </option>
                <option
                  className={` ${
                    theme === "dark" ? "bg-slate-800/80" : "bg-slate-400/40"
                  } text-sm py-1 px-1 font-extralight hover:font-medium cursor-pointer hover:bg-slate-900/50`}
                >
                  Location
                </option>
              </select>
              <button className="p-2 rounded-full bg-gray-500/60">
                <FaSearch />
              </button>
            </div>
          </div>
          <p className="">Popular Searches</p>
          <div className="flex flex-wrap gap-2 space-y-1 text-xs">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className={`flex items-center rounded-xl px-2 py-[1px] z-[12] border ${
                    theme === "dark"
                      ? "bg-slate-900/90 hover:bg-gray-800"
                      : "bg-gray-300 hover:bg-gray-500"
                  } cursor-pointer`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="heroRight w-1/2 max-lg:w-full h-1/2 md:h-full flex items-center justify-center max-lg:pb-6 max-lg:px-4">
        <div className="cards h-1/2 aspect-square relative flex items-center justify-center ">
          <Carousel autoSlide autoSlideInterval={5000}>
            {carouselImages.map((image, index) => (
              <img src={image} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
