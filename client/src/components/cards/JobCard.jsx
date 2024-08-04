import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const cardVariants = {
  initial: {y : '-40px' , opacity: 0.3, scale : 0.5},
  transform: { y : 0, opacity: 1, scale: 1 , transition: {staggerChildren: 0.2, ease: 'easeInOut'} }
}

const JobCard = ({ job }) => {
  
  const theme = useSelector((state) => state.theme.value);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView && !controls.isAnimating) {
      controls.start("transform");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial='initial' animate={controls} variants={cardVariants} transition={{ease: 'linear', duration: 1}} className="flex flex-col itemss-start shadow-[0_0_25px_gray] shadow-gray-500/40 backdrop-blur-md rounded-md p-4 ">
      <p className="text-xl font-semibold ">{job.title}</p>
      <Link to={`/companies/${job.company}`} className="company relative flex items-center cursor-pointer py-1 my-1 pr-4 w-fit">
        <img
          src={job.logo}
          alt={job.company}
          className={`w-20 h-10 rounded-full object-contain flex items-center mr-4 ${theme === 'dark' && 'hover-effect-dark'}`}
        />
        <p className={`font-semibold `}>{job.company}</p>
      </Link>
      <p className="">{job.location}</p>
      <p>Salary - {job.salary}</p>
      <p>
        {job.description.slice(0, 100)}
        <Link
          to={`/jobs/${job._id}`}
          className={`hover:text-blue-900/70 hover-effect text-xs ${theme === 'dark' && 'hover-effect-dark'}`}
        >
          {" "}
          ...see more
        </Link>
      </p>
    </motion.div>
  );
};

export default JobCard;