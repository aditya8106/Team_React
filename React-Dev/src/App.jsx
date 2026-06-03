import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAlljobs from './components/ViewAlljobs'
const App = () => {
  return (
    <>

      <Navbar />
      <Hero />
      <HomeCards />
    <JobListings />
    <ViewAlljobs />

    
    </>
  )
}

export default App