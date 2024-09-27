import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../Context/AuthProvider'

function Logout() {
    const [authUser,setAuthUser] =useAuth()
    const handleLogout = () => {
       try {
        setAuthUser({
            ...authUser, 
            user:null                             //Fetched from LocalStorage
        })
        localStorage.removeItem('Users')          //Removing data from LocalStorage
        toast.success('Logged Out Successfully')  //Showing success message
        setTimeout(()=>{
            window.location.reload()                  //Reloading automatically
        },2000)
       } catch (error) {
        toast.error("Error:" + error.message) 
        setTimeout(()=>{},1000);
       }
    }
  return (
    <div>
      <button className='bg-black text-yellow-500 font-bold px-3 py-1.5 rounded-md hover:bg-yellow-500 hover:text-black duration-100 cursor-pointer dark:text-black dark:bg-yellow-500 dark:hover:bg-black dark:hover:text-yellow-500 dark:hover:duration-100'
      onClick={handleLogout}> Logout</button>
    </div>
  )
}

export default Logout
