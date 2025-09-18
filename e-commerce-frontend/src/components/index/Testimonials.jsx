import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The quality is incredible and the fit is perfect. I've ordered three jackets already and they're all amazing.",
      name: "Marcus Johnson",
      initials: "MJ"
    },
    {
      text: "Fast shipping, great packaging, and the clothes look exactly like the photos. BR.F has become my go-to brand.",
      name: "Sarah Kim",
      initials: "SK"
    },
    {
      text: "Love the sustainable approach without compromising on style. These pieces are built to last.",
      name: "David Rodriguez",
      initials: "DR"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center items-stretch px-2 min-h-[200px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials
