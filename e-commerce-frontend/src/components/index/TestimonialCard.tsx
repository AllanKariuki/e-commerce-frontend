import React from 'react'

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <p className="text-gray-700 italic leading-relaxed mb-6">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
        {testimonial.initials}
      </div>
      <div>
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-gray-500 text-sm">Verified Buyer</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard
