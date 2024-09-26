import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // alert(JSON.stringify(data)); // For testing
    // console.log(data);
    const userInfo={
      email:data.email,
      password:data.password
    }
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`,userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("Logged in Successfully") 
        toast.success('Successfully Logged In');
        setTimeout(()=>{
          document.getElementById('my_modal_3').close();
          window.location.reload()
          //Storing the data in Browser's local Storage 
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000)
      }

    }).catch((err)=>{
       if(err.response){
        // alert("Error:"+ err.response.data.message)
        toast.error("Error:"+ err.response.data.message);
        setTimeout(function(){},1000)
       }
    })
  };

  // Function to close the modal
  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  }

  return (
    <div>
      {/* You can open the modal using document.getElementById('my_modal_3').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal button */}
            <Link to='/'>
              <button 
                type="button" 
                className="btn btn-sm btn-ghost absolute right-2 top-2" 
                onClick={closeModal}
              >
                ✕
              </button>
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className='mt-5 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type='email' 
                placeholder='Enter your email' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })} 
              />
              <br></br>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div> {/* Closing div added here for the email section */}

            {/* Password */}
            <div className='mt-5 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type='password' 
                placeholder='Enter your password' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })} 
              />
              <br></br>
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Login Button */}
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200'>
                Login
              </button>
              <p className='mt-4'>
              Not registered? 
              <Link to='/SignUp'>
                <span className='underline text-blue-500 cursor-pointer'> SignUp!!</span>
              </Link>
            </p>
            </div>

            
           
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
