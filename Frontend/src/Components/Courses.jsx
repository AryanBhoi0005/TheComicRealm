import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Courses() {
  //Defining State for calling Backend API 
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook= async()=>{
      try {
        //As our API created is GET REQ
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`)
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className='min-h-screen dark:bg-black'>
      <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
         
        <div className='pt-28 justify-center items-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl  text-black dark:text-gray-500'>
        We're delighted to have you {" "}
        <span className='text-gray-500 dark:text-yellow-600'> at OurStore :) </span></h1>
        <p className='mt-10 text-2xl dark:text-gray-500'>
        "Even the mightiest warriors experience fears. What makes them a true warrior is the courage that they possess to overcome their fears."
        </p>
        <span className='flex justify-center text-lg dark:text-gray-300'>- Prince Vegeta</span>
        <Link to='/'>
        <button className='bg-black dark:bg-gray-500 dark:text-black text-white px-4 py-2 rounded-xl mt-6 duration-700 hover:bg-[#FFD700] hover:text-black hover:font-bold'>Back</button>
        </Link>
        </div>
        
        {/* Card for Courses */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
            {
              //We have to map it with book and not list and we don't need list anymore
              book.map((item)=>(
                <Cards key={item.id} item={item}/> 
              ))
            }
        </div>

      </div>
    </div>
    </>
  )
}
 
export default Courses
 