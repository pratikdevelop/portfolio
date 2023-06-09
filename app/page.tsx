import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Project from './pages/Project'
import Skill from './pages/Skill'

const page = () => {
  return (
    <div className="flex mt-20 flex-col relative overflow-hidden overflow-y-auto h-[100vh] w-full">
      <Home/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  )
}

export default page