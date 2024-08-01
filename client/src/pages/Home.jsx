import React from "react";
import { useSelector } from "react-redux";
import NavSmall from "../components/Navbar";
import { Link } from "react-router-dom";
import MarqueeItem from "../components/cards/MarqueeItem";

const Home = () => {
  const upperMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
    "/11.svg",
  ];

  const lowerMarquee = [
    "/12.svg",
    "/13.svg",
    "/14.svg",
    "/15.svg",
    "/16.svg",
    "/17.svg",
    "/18.svg",
    "/19.svg",
    "/20.svg",
    "/21.svg",
    "/22.svg",
  ];
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className={`min-h-[100dvh] w-full font-gupter overflow-x-hidden ${
        theme === "dark" && "bg-zinc-900 text-white"
      }`}
    >
      <NavSmall>
        <div className="flex items-center justify-end gap-6 max-lg:gap-4 font-[500]">
          <Link
            to="/auth/login"
            className={` auth-button ${theme === "dark" && "auth-button-dark"}`}
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className={` auth-button ${theme === "dark" && "auth-button-dark"}`}
          >
            Signup
          </Link>
        </div>
      </NavSmall>
      <div
        className={`landing absolute w-full top-[8vh] ${
          theme === "dark" && "bg-zinc-900 text-white"
        }`}
      >
        <div className={`page1 bg-gradient-to-r to-slate-900/30 border h-screen w-full flex max-lg:flex-col-reverse`}>
          <div className="heroLeft h-full flex flex-col text-3xl items-center justify-center w-1/2 max-lg:w-full">
            <div className="flex leftContent items-start justify-center gap-6 flex-col">
              {["Where Potential", "Meets", "Opportunities"].map(
                (text, index) => {
                  return (
                    <div
                      className="masker flex items-center justify-center "
                      key={index}
                    >
                      {index == 1 && (
                        <span className="h-12 inline-block w-20 rounded-md mr-4 bg-red-700"></span>
                      )}
                      <h1>{text}</h1>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="heroRight w-1/2 max-lg:w-full h-1/2 md:h-full flex items-center justify-center">
            <div className="cards h-full w-full relative flex items-center justify-center md:mb-24 max-lg:mt-20 -ml-6">
              <div className="card absolute h-[65%] backdrop-blur-lg bg-gradient-to-b from-blue-300/30 max-lg:h-[90%] w-1/2 rounded-xl rotate-[10deg] origin-bottom-left shadow-[0_0_15px_gray]"></div>
              <div className="card absolute h-[65%] backdrop-blur-lg bg-gradient-to-b from-violet-300/30 max-lg:h-[90%] w-1/2 rounded-xl rotate-[5deg] origin-bottom-left shadow-[0_0_15px_gray]"></div>
              <div className="card absolute h-[65%] backdrop-blur-lg bg-gradient-to-b from-purple-300/30 max-lg:h-[90%] w-1/2 rounded-xl shadow-[0_0_15px_gray]"></div>
            </div>
          </div>
        </div>

        <div className="marquee flex flex-col py-6 items-center md:text-3xl max-lg:text-xs rounded-t-lg bg-slate-900/90 shadow-[0_0_20px_gray] shadow-gray-300/40 overflow-hidden whitespace-nowrap ">
          <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
          <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
        </div>
      </div>
    </div>
  );
};

export default Home;
