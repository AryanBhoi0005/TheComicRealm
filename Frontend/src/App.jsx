import { useState } from 'react'
import Home from './Home/Home.jsx'
import Course from './Course/Course.jsx'
import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from './Components/SignUp.jsx'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider.jsx'

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>
    <div className=''> 
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Course' element={authUser?<Course/>:<Navigate to='/SignUp'/>}> </Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App
