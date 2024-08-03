import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MarqueeItem from "../components/cards/MarqueeItem";
import Hero from "../components/Hero";
import { lowerMarquee, upperMarquee } from "../utils";
import Navbar from "../components/shared/Navbar";
import TrendingJobs from "../components/TrendingJobs";

const Home = () => {

  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className={`min-h-[100dvh] w-full font-gupter overflow-x-hidden ${
        theme === "dark" && "bg-zinc-900 text-white"
      }`}
    >

      {/* Navbar */}
      <Navbar>
        <div className="flex items-center justify-end gap-6 max-lg:gap-4">
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
      </Navbar>
      <div
        className={`landing absolute w-full ${
          theme === "dark" && "bg-zinc-900 text-white"
        }`}
      >
        {/* Hero Section */}
        <Hero />

        {/* Marquee Section */}
        <div className="marquee flex flex-col py-6 items-center md:text-3xl max-lg:text-xs rounded-t-lg bg-slate-900/90 shadow-[0_0_20px_gray] shadow-gray-300/40 overflow-hidden whitespace-nowrap ">
          <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
          <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
        </div>

        {/* Trending Jobs Section */}
        <TrendingJobs />
      </div>
    </div>
  );
};

export default Home;
