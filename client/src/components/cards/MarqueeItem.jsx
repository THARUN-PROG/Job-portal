import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className={`flex flex-shrink-0 ${from === 0 ? "border-t" : "border-b"}`}
      >
        {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20 mix-blend-difference text-black fill-black stroke-black" src={`/images/${image}`} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className={`flex flex-shrink-0 ${from === 0 ? "border-t" : "border-b"}`}
      >
        {images.map((image, index) => {
          return <img className="h-40 w-56 pr-20 mix-blend-difference text-black fill-black stroke-black" src={`/images/${image}`} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;