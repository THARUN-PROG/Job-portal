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
        <div className="flex items-center justify-end gap-4 max-lg:gap-4 font-[500]">
          <Link to="/auth/login" className="auth-button">
            Login
          </Link>
          <Link to="/auth/register" className="auth-button">
            Signup
          </Link>
        </div>
      </NavSmall>
      <div
        className={`landing absolute h-[400vh] w-full top-[8vh] ${
          theme === "dark" && "bg-zinc-900 text-white"
        }`}
      >
        <div className="page1 h-[92dvh] w-full">
          <div className="flex items-center justify-center h-1/2">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Welcome to Jobster</h1>
              <p className="text-lg">The best place to find your dream job</p>
            </div>
          </div>
          <div data-scroll data-scroll-speed='-0.96' className="marquee flex flex-col -gap-12 py-12 items-center md:text-3xl max-lg:text-xs rounded-t-lg bg-slate-500/50 overflow-hidden whitespace-nowrap">
            <MarqueeItem images={upperMarquee} from={0} to={'-100%'}/>  
            <MarqueeItem images={lowerMarquee} from={'-100%'} to={0}/>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
