import React from 'react'
import About from './pages/About'
import Home from './pages/Home'

const page = () => {
  return (
    <div className="flex mt-20 flex-col relative overflow-hidden overflow-y-auto h-[100vh] w-full">
      <Home/>
      <About/>
    </div>
  )
}

export default page