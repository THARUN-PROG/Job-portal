import { motion } from "framer-motion";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get("jobTitle");
  const location = searchParams.get("location");
  return (
    <motion.div
      initial={{ y: "20px" }}
      animate={{ y: 0 }}
      exit={{ y: "20px" }}
      transition={{ ease: "linear", duration: 0.3 }}
    >
      {jobTitle ? <>This page will display jobs for&nbsp;</> : <>Search for jobs</>}
      {jobTitle}
      {location && ` in ${location}`}
    </motion.div>
  );
};

export default Search;
