import React, { useEffect, useState } from 'react'
import logo from '../../public/Logo7.jpg'
import Login from './Login';
import Logout from './Logout'
import { useAuth } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

function Navbbar() {
  
  // const fetchData=(value) => {
  //   fetch("").then((Response=>Response.json()).then(json => {
  //     const results=json.filter((user)=>{
  //       return (value && user && user.name && user.name.toLowerCase().includes(value)
  //     )})
  //     console.log(results)
  //   }))
  // }
  // const handlChange=(value)=>{
  //   setInput(value)
  //   fetchData(value)
  // }
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState('light');
  const [sticky, setSticky] = useState(false);
  const element = document.documentElement;

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      element.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme, element]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navComponents = (
    <>
      <li className='dark:hover:bg-yellow-500 dark:hover:rounded-xl dark:font-bold hover:bg-yellow-500 hover:rounded-xl text-black font-bold '>
        <Link to='/'>Home</Link>
      </li>
      <li className='dark:hover:bg-yellow-500 dark:hover:rounded-xl dark:font-bold hover:bg-yellow-500 hover:rounded-xl text-black font-bold'>
        <Link to='/Course'>Books</Link>
      </li>
      <li className='dark:hover:bg-yellow-500 dark:hover:rounded-xl dark:font-bold hover:bg-yellow-500 hover:rounded-xl text-black font-bold'>
        <Link to='/Contact'>Contact</Link>
      </li>
      <li className='dark:hover:bg-yellow-500 dark:hover:rounded-xl dark:font-bold hover:bg-yellow-500 hover:rounded-xl text-black font-bold'>
        <Link to='/About'>About</Link>
      </li>
    </>
  );

  return (
      <>
    <div className={`bg-white max-w-screen-2xl mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 dark:bg-gray-500 dark:text-gray-500  ${
      sticky?"sticky-navbar shadow-md bg-yellow-500 dark:bg-gray-700 duration-700 mt-2 rounded-2xl transition-all ease-in-out": " " }
      `}>
      <div className="navbar ">
  <div className="navbar-start"> 
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-400 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow ">
      {navComponents}
      </ul>
    </div>
    <img src={logo} className="h-10 w-10 rounded-xl hidden sm:block " />

    <Link 
  to="/" // Navigate to home route
  className="text-black md:text-2xl lg:text-3xl font-bold mx-3 dark:hover:text-yellow-500 dark:hover:duration-300 hover:text-yellow-500"
>TheComicRealm</Link>
  </div>
  
  <div className="navbar-end space-x-4 space-y-2">
  <div className="navbar-center hidden lg:flex font-semibold ">
    <ul className="menu menu-horizontal px-3">
      {navComponents}
    </ul>
  </div>
  
  {/* Search Bar */}
  {/* <div className='hidden lg:block dark:hover:text-yellow-500 dark:hover duration-300'>
  <label className="flex items-center gap-2 px-2 py-1 border-2 border-black rounded-xl dark:hover:border-yellow-500">
    <input 
      type="text"
      className="grow outline-none bg-transparent text-black placeholder-black duration-300 dark:hover:text-yellow-500 dark:hover:placeholder-yellow-400"
      placeholder="Search"
      // onChange={(e) =handlChange(e.target.value)} 
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
  </label>
</div> */}



  {/* Theme Controller */}
  <label className="swap swap-rotate  dark:hover:duration-300 text-black">
              <input type="checkbox" className="theme-controller" />
              <svg
                className="swap-off h-9 w-9 fill-current order-2 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={toggleMode}
              >
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                />
              </svg>

              <svg
                className="swap-on h-9 w-9 fill-current order-1 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={toggleMode}
              >
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
              </svg>
            </label>

  {/* Button */}
                                  {/* On basis of ContextAPI check if user is already logged in or not */}
    {
      authUser?<Logout/>:
      <div>
      <a className="bg-black text-white font-bold px-4 py-2 rounded-md hover:bg-gray-800 hover:text-yellow-500 duration-300 cursor-pointer dark:hover:bg-yellow-600 dark:hover:text-black dark:hover:duration-300 "
      onClick={()=>document.getElementById("my_modal_3").showModal()}
      >Login</a>
      <Login/>
      </div>
    }


</div>
</div>
    </div>
      </>
  )
}

export default Navbbar
