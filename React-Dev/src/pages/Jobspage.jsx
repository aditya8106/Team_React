import React from 'react'
import JobListings from '../components/JobListings'

const Jobspage = ({ isHome = false }) => {
  return (
   <>
     
      <JobListings isHome={isHome} />
   </>
  )
}

export default Jobspage