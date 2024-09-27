import React, { useState } from 'react';
import banner from '/Banner.jpg';
import Login from './Login';
import toast from 'react-hot-toast';
import axios from 'axios';

function Banner() {
  const [query, setQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitFeedback = async (data) => {
    const userFeedback = { query: data.query };

    setIsSubmitting(true);
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/Feed`, userFeedback)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Swoosh!!! Help on its Way');
          setQuery("");  // Reset the input field
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      })
      .finally(() => {
        setIsSubmitting(false);  // Re-enable the button after submission
      });
  };

  return (
    <>
      <div className='bg-white max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row dark:pt-8 dark:bg-black py-4'>

        {/* Left */}
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 '>
          <div className='space-y-12'>
            <h1 className='text-5xl font-bold text-black dark:text-gray-400 mb-0'>
              Every hero has a story. Discover yours with every page!
              <span className='text-gray-500 dark:text-yellow-500 text-4xl'>
                The adventure starts here!!!!!
              </span>
            </h1>
            <p className='text-xl font-semibold text-black dark:text-gray-300'>
              In a world filled with darkness, I choose to be the light.
              <br className='my-2' />
              <span className='font-bold dark:text-white block text-right'>
                —BATMAN
              </span>
              <br className='my-2' />
            </p>

            {/* Input Feedback */}
            <label className="input  input-bordered border-gray-800 flex items-center gap-2 dark:bg-gray-700 dark:text-black bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path d="M12 2C9.8 2 7.9 3 6.3 4.5L4 6.5L3 5.5L2 6.5L5.1 10.6L1.3 14.2C.5 15 1.5 16 3 16H4.5C5.3 16 6 16.8 6.5 17.4L8.7 19.7C9.4 20.4 10.7 20.4 11.4 19.7L12 19.2L12.6 19.7C13.3 20.4 14.6 20.4 15.3 19.7L17.5 17.4C18 16.8 18.7 16 19.5 16H21C22.5 16 23.5 15 22.7 14.2L18.9 10.6L22 6.5L21 5.5L20 6.5L17.7 4.5C16.1 3 14.2 2 12 2ZM12 4C13.6 4 15 4.5 16.1 5.4C15.1 6.1 14.2 7 13.6 8.1L12 8.8L10.4 8.1C9.8 7 8.9 6.1 8 5.4C9 4.5 10.4 4 12 4ZM12 22C10.4 22 9 21.5 7.9 20.6C8.9 19.9 9.8 19 10.4 17.9L12 17.2L13.6 17.9C14.2 19 15.1 19.9 16.1 20.6C15 21.5 13.6 22 12 22Z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="grow  text-yellow-500 dark:text-yellow-500 font-bold dark:hover:placeholder-yellow-500 placeholder:text-gray-400 placeholder:dark:text-black"
                placeholder=" Help! Somebody, please! In the face of danger, I need a hero!"
              />
            </label>
          </div>

          {/* Button */}
          <button
            className="text-gray-400 bg-black btn btn-active font-bold btn-neutral mt-6 dark:text-black dark:bg-gray-600 dark:hover:bg-yellow-500 dark:hover:text-black hover:bg-yellow-500 hover:text-black"
            onClick={() => submitFeedback({ query })}
            disabled={isSubmitting} // Disable the button during submission
          >
            {isSubmitting ? "Submitting..." : "POW!! POW!!!"}
          </button>
        </div>

        {/* Right */}
        <div className=' order-1 w-full md:w-1/2 dark:px-4'>
          <img src={banner} className='mt-16 md:size-85 dark:rounded-lg' alt='' />
        </div>
      </div>
    </>
  );
}

export default Banner;
