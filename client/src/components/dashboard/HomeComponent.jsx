import { jobs } from "@/utils";
import { motion } from "framer-motion";
import React from "react";
import JobCard from "../cards/JobCard";

const HomeComponent = () => {
  return (
    <motion.div
      initial={{ y: "20px" }}
      animate={{ y: 0 }}
      exit={{ y: "20px" }}
      transition={{ ease: "linear", duration: 0.3 }}
      className=" w-full flex flex-col justify-start p-4 max-sm:px-1 overflow-y-auto overflow-x-hidden"
    >
      <div className="intro pb-4 px-2">
        <h1 className="text-xl font-bold">Welcome User</h1>
        <p className="font-light text-sm md:w-3/4">
          Explore endless opportunities through our immersive job search and
          connect to like minded individuals. Check out the latest job postings from our partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-content-start gap-4 p-4">
        {jobs.map((job, index) => {
          return(
            <JobCard key={index} job={job} />
          )
        })}
        {jobs.map((job, index) => {
          return(
            <JobCard key={index} job={job} />
          )
        })}
       
      </div>

      <div className="pagination">Pages</div>
    </motion.div>
  );
};

export default HomeComponent;
