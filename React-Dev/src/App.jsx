import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import Jobspage from './pages/Jobspage'
import AddJob from './pages/Add-Job'
import NotFound from './pages/NotFound'
import JobPage,{jobLoader} from './pages/JobPage'
import EditJobPage from './pages/EditJobPage'

const App = () => {
  //addjob
  const addJob = async (newJob) =>{
    const res = await fetch('api/jobs',{
      method :'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(newJob)

    });
    return
  };
  //delete job  
const deleteJob = async (id) =>{
  const res = await fetch(`/api/jobs/${id}`,{
      method :'DELETE',
    });
    return
}

const updatejob = async (job) =>{
  const res = await fetch(`/api/jobs/${job.id}`,{
      method :'PUT',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(job)

    });
    return res.json()
}

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<Jobspage />} />
      <Route path='/add-job' element={<AddJob addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element ={<JobPage deleteJob = {deleteJob}/>} loader={jobLoader}/>
      <Route path='/edit-job/:id' element ={<EditJobPage updateJobSub = {updatejob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFound />} />

    </Route>
  )
)
  return  <RouterProvider router={router} />;
}

export default App