import React, { useState } from 'react'
import './App.css'
import { Search, Menu, Info, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, Plus, ArrowUpRight, Heart, User } from 'lucide-react';
import ProductDetailCard from './components/ProductDetailCard';
import StayInTouch from './components/StayInTouch';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-bold text-xl">BR.</span>
              <span className="font-bold text-xl text-gray-300">F</span>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full py-2 px-10 text-sm bg-gray-100 rounded-full focus:outline-none"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Icons */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs w-4 h-4 rounded-full flex items-center justify-center">4</span>
              </div>
              <Heart size={20} />
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <User size={20} className="mx-auto mt-1" />
              </div>
            </div>
          </div>
          
          {/* Navigation Categories */}
          {/* <div className="container mx-auto px-4 py-3"> */}
            <div className="container mx-auto px-4 mt-6 mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center justify-between space-x-1 space-x-1 max-w-md rounded-full bg-gray-100 py-1 xl:w-80 px-3">
                    <span className="text-sm text-gray-400 font-medium">Categories</span>
                    <span className='bg-white rounded-full p-1.5'>
                      <ChevronDown size={16}  />
                    </span>
                    
                  </div>
                  
                  <div className="flex items-center justify-between space-x-1 max-w-md rounded-full bg-gray-100 py-1 xl:w-50 px-3">
                    <span className="text-sm text-gray-500">New Product</span>
                    <span className='bg-white rounded-full p-1.5'>
                      <ChevronDown size={16}  />
                    </span>
                  </div>
                  
                  <div className="flex-1 max-w-md xl:w-100 mx-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full py-2 px-10 text-sm bg-gray-100 rounded-full focus:outline-none"
                      />
                      <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="bg-black text-white text-xs px-4 py-2 rounded-full">
                    Men
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Women
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Children
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Sports 
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Brands
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    New 
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Sale
                  </button>
                </div>
              </div>
          </div>
          {/* </div> */}
        </header>
      
        {/* Hero Slider */}
        <div className="relative overflow-hidden bg-stone-200 h-160 rounded-2xl mx-2">
          <div 
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="min-w-full h-full relative flex items-center">
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-stone-200 rounded-full relative overflow-hidden">
                  <div className="absolute right-0 w-2/3 h-full rounded-l-full bg-blue-100">
                    {/* Background image would be placed here */}
                  </div>
                </div>
              </div>
              
              <div className="container mx-auto px-8 z-10">
                <div className="max-w-md">
                  <h1 className="text-5xl font-light text-white leading-tight mb-4">
                    We are<br />digital<br />meets fashions
                  </h1>
                  <p className="text-white text-sm mb-6">
                    Show your store shine, get high-quality<br />swag directly from the vstore foundation.
                  </p>
                  
                  <div className='flex align-center left-1/2 transform -translate-x-1/2 absolute mb-0 z-30 bottom-20'>
                    
                    <button className="bg-white text-black px-6 py-3 rounded-full flex align-center mb-0">
                      <span className="font-medium">Start shopping</span>
                    </button>

                    <div className="bg-white text-black rounded-full flex align-center justify-center p-3">
                      <ArrowUpRight size={26}/>
                    </div>
                  </div>

                  <button className="text-white text-lg left-1/2 transform -translate-x-1/2 absolute bottom-8">
                    Top collections
                  </button>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 text-white text-xs">
                <p>Transforming into stylish,</p>
                <p>functional pieces</p>
              </div>
            </div>
            
            {/* Slide 2 */}
            <div className="min-w-full h-full bg-stone-300">
              {/* Content for second slide */}
            </div>
            
            {/* Slide 3 */}
            <div className="min-w-full h-full bg-stone-300">
              {/* Content for third slide */}
            </div>
          </div>
          
          {/* Slide controls */}
          <div className="absolute top-8 right-4 transform flex space-x-2">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      
        {/* Second Section - Catalogs - Updated to match the image */}
        <div className="py-8">
          <div className="container mx-auto px-4"> 
            <div className="flex items-center justify-between mt-4 mb-2">
            <span className="text-sm font-medium py-2 px-2 rounded-full text-gray-400 bg-gray-100">New arrival</span>
            
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-gray-100 bg-opacity-70 rounded-full flex items-center justify-center">
                <ChevronLeft size={16} className="text-gray-400" />
              </button>
              <button className="w-8 h-8 bg-gray-100 bg-opacity-70 rounded-full flex items-center justify-center">
                <ChevronRight size={16} />
              </button>
              <a href="#" className="text-xs ml-2">View all</a>
            </div>
          </div>  
          <h4 className='flex mx-auto justify-center items-center text-5xl max-w-1/3 my-10 text-black'>
            Fresh arrivals and new selections
          </h4>       
            {/* Product cards row - matching the image */}
          <div className="grid grid-cols-4 gap-5 overflow-x-auto mb-20">

            <div className="rounded-2xl overflow-hidden bg-gray-100 relative w-full max-w-sm">
              <div className="h-80">
                <img src="/api/placeholder/240/320" alt="Suede-effect jacket" className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 bg-white text-sm px-3 py-2 rounded-full shadow-sm w-30">
                  Overshirts
                </button>
              </div>
              
              <div className="flex justify-between bg-white rounded-xl w-full max-w-xs mx-auto relative py-3 bottom-4 px-4 shadow-sm">
                <div>
                  <h3 className="font-medium">Suede-effect jacket</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">$119.99</p>
                    <p className="text-xs text-gray-500 line-through">$136.99</p>
                  </div>
                </div>
                <span className="rounded-full bg-gray-100 p-3.5 flex items-center justify-center">
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-gray-100 relative w-full max-w-sm">
              <div className="h-80">
                <img src="/api/placeholder/240/320" alt="Suede-effect jacket" className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 bg-white text-sm px-3 py-2 rounded-full shadow-sm w-30">
                  Overshirts
                </button>
              </div>
              
              <div className="flex justify-between bg-white rounded-xl w-full max-w-xs mx-auto relative py-3 bottom-4 px-4 shadow-sm">
                <div>
                  <h3 className="font-medium">Suede-effect jacket</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">$119.99</p>
                    <p className="text-xs text-gray-500 line-through">$136.99</p>
                  </div>
                </div>
                <span className="rounded-full bg-gray-100 p-3.5 flex items-center justify-center">
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-gray-100 relative w-full max-w-sm">
              <div className="h-80">
                <img src="/api/placeholder/240/320" alt="Suede-effect jacket" className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 bg-white text-sm px-3 py-2 rounded-full shadow-sm w-30">
                  Overshirts
                </button>
              </div>
              
              <div className="flex justify-between bg-white rounded-xl w-full max-w-xs mx-auto relative py-3 bottom-4 px-4 shadow-sm">
                <div>
                  <h3 className="font-medium">Suede-effect jacket</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">$119.99</p>
                    <p className="text-xs text-gray-500 line-through">$136.99</p>
                  </div>
                </div>
                <span className="rounded-full bg-gray-100 p-3.5 flex items-center justify-center">
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-gray-100 relative w-full max-w-sm">
              <div className="h-80">
                <img src="/api/placeholder/240/320" alt="Suede-effect jacket" className="w-full h-full object-cover" />
                <button className="absolute top-3 right-3 bg-white text-sm px-3 py-2 rounded-full shadow-sm w-30">
                  Overshirts
                </button>
              </div>
              
              <div className="flex justify-between bg-white rounded-xl w-full max-w-xs mx-auto relative py-3 bottom-4 px-4 shadow-sm">
                <div>
                  <h3 className="font-medium">Suede-effect jacket</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">$119.99</p>
                    <p className="text-xs text-gray-500 line-through">$136.99</p>
                  </div>
                </div>
                <span className="rounded-full bg-gray-100 p-3.5 flex items-center justify-center">
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


        <div className="my-8">
          <div className="container mx-auto px-4 mb-20">
            <div className="flex items-center justify-between mt-4 mb-2">
              <span className="text-sm font-medium py-2 px-2 rounded-full text-gray-400 bg-gray-100">Product Catalog</span>
              
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-gray-100 bg-opacity-70 rounded-full flex items-center justify-center">
                  <ChevronLeft size={16} className="text-gray-400" />
                </button>
                <button className="w-8 h-8 bg-gray-100 bg-opacity-70 rounded-full flex items-center justify-center">
                  <ChevronRight size={16} />
                </button>
                <a href="#" className="text-xs ml-2">View all</a>
              </div>
            </div>
            <h4 className='flex mx-auto justify-center items-center text-5xl max-w-1/3 my-10 text-black'>
              Products and catalog
            </h4> 
            
            {/* Product cards row - matching the image */}
            <div className="grid grid-cols-4 gap-5 overflow-x-auto">

              <ProductDetailCard/>
              <ProductDetailCard />
              <ProductDetailCard />
              <ProductDetailCard />
              
            </div>
          </div>
        </div>

        <StayInTouch/>
        
        <Footer />

    </div>
  )
}

export default App