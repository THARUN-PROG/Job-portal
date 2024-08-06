import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/shared/Navbar";

const About = () => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={` ${theme === 'dark' && 'bg-zinc-900 text-white'} w-screen min-h-[100dvh] font-gupter`}>
      <Navbar otherClasses={'relative'}>
        {location.pathname === "/auth/register" ? (
          <Link to="/auth" className="auth-button">Log In</Link>
        ) : (
          <Link to="/auth/register" className="auth-button">Sign Up</Link>
        )}
      </Navbar>
      <Outlet />
    </div>
  );
};

export default About;
