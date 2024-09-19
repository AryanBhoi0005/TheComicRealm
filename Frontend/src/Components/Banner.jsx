import React, { useState } from 'react'
import banner from '/Banner.jpg'
import Login from './Login'

function Banner() {
    
  return (
    <>
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row dark:pt-8 dark:bg-black py-4'>
         
        {/* Left */}
      <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 '>
      <div className='space-y-12'>
      <h1 className='text-4xl font-bold text-black dark:text-gray-400'>
        Hello, Welcome here to learn something <span className='text-gray-500 dark:text-yellow-500'>new everyday!!!!</span>
      </h1>
      <p className='text-xl font-medium dark:text-gray-400'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eum facere magni neque provident tempore. Nihil pariatur nobis fugit, odit fugiat cupiditate dignissimos atque assumenda! Totam nesciunt similique dolorem corporis!
      </p>
      {/* Input Mail */}
      <label className="input input-bordered flex items-center gap-2 dark:bg-gray-600 dark:text-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70"
  >
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input 
    type="text" 
    className="grow text-yellow-400 dark:hover:placeholder-black" 
    placeholder="Email" 
  />
</label>

      </div>
        {/* Button */}

  <button className="btn btn-active font-bold btn-neutral mt-6 dark:bg-gray-600 dark:hover:bg-yellow-500 dark:hover:text-black hover:bg-gray-600"
   onClick={()=>document.getElementById("my_modal_3").showModal()}
  >Login</button>
   {/* <Login/> */}
      </div>

      {/* Right */}
      <div className=' order-1 w-full md:w-1/2 dark:px-4'>
      <img src={banner} className='mt-16 md:size-85 dark:rounded-lg  ' alt=''></img>
      </div>

    </div>
    </>
  )
}

export default Banner
