import React from "react";
import ThemeToggle from "./shared/ToggleTheme";
import { Link } from "react-router-dom";

const Navbar = ({children}) => {
  return (
    <nav className="sticky top-0 backdrop-blur-md w-screen px-2 md:px-8 py-3 flex items-center justify-between">
      <Link to='/' className="logo text-xl font-semibold">Jobster</Link>
      <div className="navRight flex items-center justify-end gap-8 max-sm:gap-2">
      {children}
      <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
