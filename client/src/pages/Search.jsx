import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get('jobTitle');
  const location = searchParams.get('location');
  return (
    <div>
      This page will disply jobs for&nbsp;
      {jobTitle}
      {location && ` in ${location}`}
    </div>
  )
}

export default Search
