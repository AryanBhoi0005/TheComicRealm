import { useState } from 'react'
import Home from './Home/Home.jsx'
import Course from './Course/Course.jsx'
import { Route, Routes } from "react-router-dom"
import SignUp from './Components/SignUp.jsx'

function App() {
  

  return (
    <>
    <div className=''> 
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Course' element={<Course/>}> </Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
