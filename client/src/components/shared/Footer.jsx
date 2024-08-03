import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = useSelector((state) => state.theme.value);
    return (
      <footer
        className={` ${
          theme === "dark" && "bg-zinc-900 text-white"
        } w-full bg-gradient-to-r from-zinc-900/30 flex flex-col `}
      >
      Footer
    </footer>
  )
}

export default Footer
