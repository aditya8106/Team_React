import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAlljobs from '../components/ViewAlljobs'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAlljobs />
    </div>
  )
}

export default HomePage