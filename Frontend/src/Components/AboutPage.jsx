import React from 'react';
import { FaUsers, FaHistory, FaEnvelope } from 'react-icons/fa';
import Navbbar from './Navbbar';

function AboutPage() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
      <div
        className="h-screen lg:p-20 sm:p-4 p-20 overflow-auto"
        style={{ backgroundImage: `url('Bg7.jpg')` }}
      >
        <div className="sm:max-w-xl lg:max-w-4xl max-w-4xl rounded-xl shadow-2xl sm:p-4 lg:p-8 p-8 bg-white">
          <h1 className="sm:text-2xl lg:text-4xl text-3xl font-bold mb-6 text-center">
            About Us
          </h1>

          <section className="mb-8">
            <h2 className="sm:text-xl lg:text-2xl text-2xl font-semibold flex items-center">
              <FaUsers className="mr-2" /> Our Story
            </h2>
            <p className="mt-2 text-black font-semibold">
              Founded in 2024, our platform is born from a deep-seated passion
              for comic superheroes and storytelling. Growing up, I was
              captivated by cartoons and tales that featured alternate
              storylines, sparking a desire to explore the world of comics.
              Unfortunately, access to these stories was limited, which inspired
              me to create a free platform that makes comics accessible to
              everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="sm:text-xl lg:text-2xl text-2xl font-semibold flex items-center">
              <FaHistory className="mr-2" /> Our Mission
            </h2>
            <p className="mt-2 text-black font-semibold">
              As a lifelong comic superhero enthusiast and action figure
              collector, my mission is to foster a community where fans of all
              ages can connect with their favorite characters and stories. I
              believe in the power of comics to inspire and entertain, and I aim
              to provide a platform where everyone can explore this vibrant
              medium.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="sm:text-xl lg:text-2xl text-2xl font-semibold flex items-center">
              <FaEnvelope className="mr-2" /> Contact Us
            </h2>
            <div className="mt-2 text-black font-semibold">
              <p>
                If you have any questions, suggestions, or would like to
                collaborate, feel free to reach out to us at:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:aryansbhoi@gmail.com"
                    className="underline"
                  >{`aryansbhoi@gmail.com`}</a>
                </li>
                <li>Phone: (+91) 7083526766</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutPage;
