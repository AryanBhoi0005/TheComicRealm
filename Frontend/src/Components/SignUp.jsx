import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


function SignUp() {
  const location = useLocation();
  const navigate=useNavigate();
  const redirect = location.state?.from.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // alert(JSON.stringify(data)); // For testing
    // console.log(data);
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/users/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signed Up Successfully');
        navigate(from, { replace: true });
      }
      //Storing the data in Browser's local Storage 
      localStorage.setItem("Users",JSON.stringify(res.data.user));

    }).catch((err)=>{
       if(err.response){
        toast.error("Error:"+ err.response.data.message);
       }
    })
  };

  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div id="my_modal_3" className="modal-box">  
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
    <Link to='/'>
    <button className="btn btn-sm  btn-ghost absolute right-2 top-2">✕</button>
    </Link>    
    <h3 className="font-bold text-lg">SignUp</h3>
    {/* Name  */}
    <div className='mt-5 space-y-2 ' >
        <span>Name</span>
        <br></br>
        <input type='text' placeholder='Enter your FullName' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("fullname", { required: true })} ></input>
        <br></br>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Email */}
    <div className='mt-5 space-y-2 ' >
        <span>Email</span>
        <br></br>
        <input type='email' placeholder='Enter your mail' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("email", { required: true })} ></input>
        <br></br>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Password */}
    <div className='mt-5 space-y-2' >
        <span>Password</span>
        <br></br>
        <input type='password' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("password", { required: true })} ></input>
        <br></br>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Login Button */}
    <div className='flex justify-around mt-4'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200'>SignUp</button>
     <p className='mt-4 text-lg'> Already Have Account? {" "}
        <Link to="/">
        <button className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}> Login </button>
        {/* <Login/>  */}
        </Link>
         {/* <Login/> */}
    </p> 
    </div>
    
    </form>
  </div>
    </div>
    </>
  )
}

export default SignUp
