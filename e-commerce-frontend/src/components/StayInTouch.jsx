import React from "react";

const StayInTouch = () => {
  return (
    <div className="relative h-100 flex flex-col items-center justify-center bg-gray-100 py-16 px-24 md:px-12 rounded-2xl shadow-lg mx-4 my-10">
      <h2 className="text-8xl font-bold text-gray-900 text-center mb-6">
        Stay in touch
      </h2>
      <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full py-1 px-1">
        <input
          type="email"
          placeholder="Enter email here"
          className="flex-1 px-4 py-2 decoration-none bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="w-36 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
          Join us
        </button>
      </div>
      <div className="absolute top-15 left-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform rotate-6">
        <img
          src="/assets/images/stay-in-touch-1.jpeg"
          alt="Jumping friends"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-15 right-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-6">
        <img
          src="/assets/images/stay-in-touch-2.jpeg"
          alt="Happy friends"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-15 right-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-6">
        <img
          src="/assets/images/stay-in-touch-3.jpeg"
          alt="Happy friends"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-15 left-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-6">
        <img
          src="/assets/images/stay-in-touch-4.jpeg"
          alt="Happy friends"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StayInTouch;