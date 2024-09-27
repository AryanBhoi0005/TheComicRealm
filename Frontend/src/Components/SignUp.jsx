import React, { useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.from.pathname || '/';
  const modalRef = useRef(null); // Create a reference for the modal

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signed Up Successfully');
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          modalRef.current.close(); // Close the modal
          navigate(redirect, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div id="my_modal_3" className="modal-box" ref={modalRef}>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to='/'>
              <button className="btn btn-sm btn-ghost absolute right-2 top-2">✕</button>
            </Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
            {/* Name */}
            <div className='mt-5 space-y-2'>
              <span>Name</span>
              <br />
              <input
                type='text'
                placeholder='Enter your Full Name'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("fullname", { required: true })}
                autoComplete="name" // Added autocomplete attribute
              />
              <br />
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Email */}
            <div className='mt-5 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type='email'
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
                autoComplete="email" // Added autocomplete attribute
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password */}
            <div className='mt-5 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type='password'
                placeholder='Enter your Password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
                autoComplete="current-password" // Added autocomplete attribute
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Sign Up Button */}
            <div className='flex justify-around mt-4 space-x-2'>
              <button className='bg-pink-500 text-white rounded-md px-4 mt-2 hover:bg-pink-600 duration-200'>SignUp</button>
              <p className='mt-1 text-lg'>Already Have an Account? {" "}
                <Link to="/">
                  <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
