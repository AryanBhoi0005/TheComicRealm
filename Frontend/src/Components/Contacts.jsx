// import React, { useState } from 'react';
// import backgroundImage from '../../public/Bg3.jpg'; // adjust the path accordingly
// import axios from 'axios';

// function Contacts() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     query: '',
//   });

//   const [statusMessage, setStatusMessage] = useState(''); // For showing success or error messages

//   // Handle form field changes
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make the POST request with formData
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contactUs/ContactController`, formData);
  
//       // Check if the response is successful (status code 200 or 201)
//       if (response.status === 200 || response.status === 201) {
//         setStatusMessage('Hero Called successfully!');
//         setFormData({ name: '', email: '', contact: '', query: '' }); // Reset form after successful submission
//       } else {
//         setStatusMessage('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setStatusMessage('Error sending message. Please check your connection or try again later.');
//     }
//   };
  

//   return (
//     <>
//       <div
//         className="max-w-screen-2xl mx-auto md:px-20 px-4 dark:pt-8 py-4 flex items-start"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover', // Ensure the image covers the entire area
//           backgroundPosition: 'center',
//           minHeight: '100vh', // Use minHeight to cover the viewport
//         }}
//       >
//         {/* Container for responsiveness */}
//         <div className="w-full sm:w-11/12 md:w-1/2 lg:w-1/3 mx-auto lg:ml-0 lg:mr-auto mt-4 md:mt-20">
//           <div className="p-6 bg-black shadow-md rounded-lg">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-500">Contact Me</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm text-yellow-500 font-medium mb-2" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-red-500 rounded-md p-2"
//                   placeholder="Who needs my help !!"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-yellow-500 text-sm font-medium mb-2" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Send a mail to your help"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm text-yellow-500 font-medium mb-2" htmlFor="contact">
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   placeholder="+91"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm text-yellow-500 font-medium mb-2" htmlFor="query">
//                   Query
//                 </label>
//                 <textarea
//                   id="query"
//                   value={formData.query}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   rows="4"
//                   placeholder="Help !!!!!"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-gray-600 duration-200"
//               >
//                 SuperHero Dash
//               </button>
//             </form>
//             {statusMessage && (
//               <p className="mt-4 text-yellow-500 text-sm">{statusMessage}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contacts;
import React, { useState } from 'react';
import backgroundImage from '../../public/Bg3.jpg'; // Adjust the path accordingly
import axios from 'axios';

function Contacts() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    query: '',
  });

  // State to store status messages for success or failure
  const [statusMessage, setStatusMessage] = useState('');

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend with formData
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contactUs/ContactController`, formData);

      // Check if the request is successful
      if (response.status === 200 || response.status === 201) {
        setStatusMessage('Hero Called successfully!');
        setFormData({ name: '', email: '', contact: '', query: '' }); // Reset form
      } else {
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('Error sending message. Please check your connection or try again later.');
    }
  };

  return (
    <>
      <div
        className="max-w-screen-2xl mx-auto md:px-20 px-4 dark:pt-8 py-4 flex items-start"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Container for responsiveness */}
        <div className="w-full sm:w-11/12 md:w-1/2 lg:w-1/3 mx-auto lg:ml-0 lg:mr-auto mt-4 md:mt-20">
          <div className="p-6 bg-black shadow-md rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-500">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-yellow-500 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-red-500 rounded-md p-2"
                  placeholder="Who needs my help !!"
                />
              </div>
              <div className="mb-4">
                <label className="block text-yellow-500 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Send a mail to your help"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-yellow-500 font-medium mb-2" htmlFor="contact">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="+91"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-yellow-500 font-medium mb-2" htmlFor="query">
                  Query
                </label>
                <textarea
                  id="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows="4"
                  placeholder="Help !!!!!"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-gray-600 duration-200"
              >
                SuperHero Dash
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-yellow-500 text-sm">{statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
