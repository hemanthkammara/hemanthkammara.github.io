import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Github from './Github'
import Github1 from './Github1'

function AllRoutes() {
  return (
    <div>

      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  )
}

export default AllRoutes