import React from "react";

const StayInTouch = () => {
  return (
    // <div className="relative h-100 flex flex-col items-center justify-center bg-gray-100 py-16 px-24 md:px-12 rounded-2xl shadow-lg mx-4 my-10">
    //   <h2 className="text-8xl font-bold text-gray-900 text-center mb-6">
    //     Stay in touch
    //   </h2>
    //   <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full py-1 px-1">
    //     <input
    //       type="email"
    //       placeholder="Enter email here"
    //       className="flex-1 px-4 py-2 decoration-none bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
    //     />
    //     <button className="w-36 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
    //       Join us
    //     </button>
    //   </div>
    //   <div className="absolute top-15 left-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform rotate-6">
    //     <img
    //       src="/assets/images/stay-in-touch-1.jpeg"
    //       alt="Jumping friends"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="absolute top-15 right-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-6">
    //     <img
    //       src="/assets/images/stay-in-touch-2.jpeg"
    //       alt="Happy friends"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="absolute bottom-15 right-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-6">
    //     <img
    //       src="/assets/images/stay-in-touch-3.jpeg"
    //       alt="Happy friends"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="absolute bottom-15 left-15 w-30 h-30 bg-white shadow-lg rounded-lg overflow-hidden transform -rotate-6">
    //     <img
    //       src="/assets/images/stay-in-touch-4.jpeg"
    //       alt="Happy friends"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    // </div>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 text-white text-center my-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Stay in touch</h2>
          <p className="text-lg mb-8">Get the latest drops, exclusive offers, and style inspiration</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 bg-white rounded-full text-gray-900 border-none outline-none text-center sm:text-left"
            />
            <button
              type="button"
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
              onClick={() => alert('Newsletter signup would happen here!')}
            >
              Join Us
            </button>
          </div>
        </div>
      </section>

  );
};

export default StayInTouch;