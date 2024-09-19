import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // alert(JSON.stringify(data)); // For testing
    console.log(data);
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
