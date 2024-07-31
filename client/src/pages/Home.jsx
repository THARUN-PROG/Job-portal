import React from "react";
import { useSelector } from "react-redux";
import NavSmall from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className={`min-h-[100dvh] w-full font-gupter overflow-x-hidden ${
        theme === "dark" && "bg-zinc-900 text-white"
      }`}
    >
      <NavSmall>
        <div className="flex items-center justify-end gap-4 max-lg:gap-4 font-[500]">
          <Link
            to="/auth/login"
            className="auth-button"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="auth-button"
          >
            Signup
          </Link>
        </div>
      </NavSmall>
      <div className="landing h-[400vh]">
        Landing
      </div>
    </div>
  );
};

export default Home;
