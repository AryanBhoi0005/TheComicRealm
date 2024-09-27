import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
// import list from '../../public/list.json'

// Added From React-Slick-Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards.jsx';

function FreeBook() {
  //Fetching data from DB to Frontend
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook= async()=>{
      try {
        //As our API created is GET REQ
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`)
        console.log(res.data)
        //We will filter the data and use the same func we used for list 
        const data=res.data.filter((data)=>data.category==="Free")
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])   
  //Filter the data on basis of "Free" Category
  // const filterData=list.filter((data)=>data.category==="Free"); ......  Now of no use as data is directly being filtered out from DB and no need for json file

  //Slider Details
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        // If more than 1024px then 3 cards else 2 and less
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };
  // console.log(filterData);
  return (
    <>
    {/* We require the same spacing for every component so copy tailwind class from Navbar */}
    
    <div className='bg-white max-w-screen-2xl mx-auto md:px-20 px-4 pb-8 space-y-2 dark:bg-black '>
      {/* ParaGragh  */}
      <div>
        {/* pb-2 is padding from bottom 2 */}
    <h1 className=' text-black font-bold text-2xl dark:text-gray-500 dark:pt-4'>Free Comics</h1>  
    <p className='text-black dark:text-gray-400 text-lg'>"Unleash the Hero Within: A New Chapter Begins!"</p>
      </div>
    
     {/* Slider  */}
    <div>
    <Slider {...settings}>
      {book.map((item)=>(
      <Cards item={item} key={item.id}/>
      ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook
