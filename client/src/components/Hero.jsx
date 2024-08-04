import React, { useRef } from "react";
import CountUp from "react-countup";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { carouselImages, jobTitles, tags } from "../utils";
import Carousel from "./cards/Carousel";
import { animateHover, removeHover } from "../utils/services";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();


  const [jobTitle, setJobTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [predictedJobs, setPredictedJobs] = React.useState([]);
  const [predictedLocations, setPredictedLocations] = React.useState([]);

  const handleSearchChange = (e) => {
    setJobTitle(e.target.value);
    setPredictedJobs([]);
    jobTitles.filter((title) => {
      if (predictedJobs.length > 4) return;
      if (title.toLowerCase().includes(e.target.value.toLowerCase())) {
        setPredictedJobs((prev) => [...prev, title]);
      }
    });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setPredictedLocations([]);
    const username = "armin1723";

    if (location.length < 2) return;
    fetch(
      `http://api.geonames.org/searchJSON?name_startsWith=${location}&maxRows=5&username=${username}&sort=population`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.geonames[0].name);
        const cities = data.geonames.map(
          (city) => `${city.name},${city?.countryCode}`
        );
        setPredictedLocations(cities);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div
    id="home"
      className="page1 bg-gradient-to-r from-transparent to-slate-900/30 md:h-screen w-full flex max-lg:flex-col gap-6"
    >
      <div className="heroLeft h-full flex flex-col items-center justify-center w-1/2 max-lg:w-full">
        <div
          className="relative flex leftContent items-start justify-center flex-col md:w-3/4 px-4 gap-4 max-lg:mt-[10vh]"
          onMouseMove={(e) => animateHover(e)}
          onMouseLeave={() => removeHover()}
        >
          <h1 className="z-[12] welcome" id="welcome">
            Welcome to Jobster
          </h1>
          <div
            className="absolute h-1/3 overlayGif md:w-1/2 w-full inset-0 z-[11] scale-75"
            id="image"
          >
            <img
              src={"./images/hoverGif.gif"}
              className="overlayGifImg absolute md:w-[30vw] h-[40vh] max-lg:scale-50 max-lg:-ml-20 max-lg:-mt-20 -mt-12 max-lg:aspect-square opacity-75  rounded-full"
            />
          </div>
          <div
            id="heading"
            className="heading text-6xl max-lg:text-3xl font-bold stroke md:mix-blend-difference z-[12]"
          >
            Find the Perfect Job for You.
          </div>
          <p className="desc text-sm max-lg:text-xs z-[12]">
            Search your career opportunities through{" "}
            <CountUp end={28000} duration={5} suffix="+" /> jobs
          </p>
          <div
            className={`rounded-2xl flex border border-slate-500 z-[12] max-lg:flex-col items-start gap-1 p-2 px-4 max-lg:w-full ${
              theme === "dark" && "bg-slate-900/90"
            }`}
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Search for jobs"
                value={jobTitle}
                onChange={(e) => handleSearchChange(e)}
                className="bg-transparent outline-none w-full text-sm py-1 z-[12] focus:border-b border-blue-500"
              />
              <div className="flex flex-col bottom-0 left-0">
                {predictedJobs.length > 0 &&
                  predictedJobs.slice(0, 4).map((job, index) => {
                    return (
                      <div
                        onClick={() => {
                          setJobTitle(job);
                          setPredictedJobs([]);
                        }}
                        key={index}
                        className="text-sm z-[12] rounded-md hover:bg-gray-300/40 hover:border-b border-teal-500 cursor-pointer"
                      >
                        {job}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex items-start max-lg:gap-12 justify-start gap-4 z-[12]">
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => handleLocationChange(e)}
                  className="bg-transparent outline-none w-full text-sm py-1 z-[12] focus:border-b border-blue-500"
                />
                <div className="flex flex-col bottom-0 left-0">
                  {predictedLocations.length > 0 &&
                    predictedLocations.slice(0, 4).map((location, index) => {
                      return (
                        <div
                          onClick={() => {
                            setLocation(location);
                            setPredictedLocations([]);
                          }}
                          key={index}
                          className="text-sm z-[12] rounded-md hover:bg-gray-300/40 hover:border-b border-teal-500 cursor-pointer"
                        >
                          {location}
                        </div>
                      );
                    })}
                </div>
              </div>
              <button
                disabled={jobTitle.length < 2 || location.length < 2}
                onClick={() => {
                  navigate(`/search?jobTitle=${jobTitle}&location=${location}`);
                }}
                className="p-2 rounded-full bg-gray-500/60 disabled:cursor-not-allowed"
              >
                <FaSearch />
              </button>
            </div>
          </div>
          <p className="">Popular Searches</p>
          <div className="flex flex-wrap gap-2 space-y-1 text-xs">
            {tags.map((tag, index) => {
              return (
                <Link
                  to={`/search?jobTitle=${tag}&location=${location}`}
                  key={index}
                  className={`flex items-center rounded-xl px-2 py-[1px] z-[12] border ${
                    theme === "dark"
                      ? "bg-slate-900/90 hover:bg-gray-800"
                      : "bg-gray-300 hover:bg-gray-500"
                  } cursor-pointer`}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="heroRight w-1/2 max-lg:w-full h-1/2 md:h-full flex items-center justify-center max-lg:pb-6 max-lg:px-4">
        <div className="cards h-2/3 aspect-square relative flex items-center justify-center ">
          <Carousel autoSlide autoSlideInterval={5000}>
            {carouselImages.map((image, index) => (
              <img src={image} key={index} priority='true'/>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
