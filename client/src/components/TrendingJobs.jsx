import React from 'react'
import { useSelector } from 'react-redux'
import { HiTrendingUp } from "react-icons/hi";
import { jobs } from '../utils';
import JobCard from './cards/JobCard';

const TrendingJobs = () => {
    const theme = useSelector((state) => state.theme.value)
  return (
    <div id='trending' className={`${theme === 'dark' && 'bg-zinc-900 text-white' } bg-gradient-to-r from-slate-900/30 h-fit w-screen flex flex-col p-4 md:px-24 md:pt-20`}>
      <h3 className='relative flex font-bold w-fit items-center gap-2 text-3xl pb-1'>Trending Jobs <span><HiTrendingUp /></span></h3>
      <div className="jobCardsContainer grid md:grid-cols-2 grid-cols-1 gap-12 items-center place-items-center py-4">
        {/* Right now its hardcoded to show dummy data but once the backend is complete it will show dynamic real time job that will keep on updating. */}
        {jobs.map((job, index) => {
            return(
                <JobCard key={index} job={job} />
            )
        })}
      </div>
    </div>
  )
}

export default TrendingJobs
