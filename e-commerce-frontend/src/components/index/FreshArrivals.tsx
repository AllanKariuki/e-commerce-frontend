import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const FreshArrivals = () => {
  const navigate = useNavigate();

  return (
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
                <a href="/products" className="text-xs ml-2">View all</a>
              </div>
            </div>  
            <h4 className='flex mx-auto justify-center items-center text-5xl max-w-1/3 my-10 text-black'>
              Fresh arrivals and new selections
            </h4>       
            {/* Product cards row - matching the image */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto mb-20">

              <div 
                className="rounded-2xl overflow-hidden 
                bg-gray-100 relative w-full max-w-sm"
                >
                <div className="h-80">
                  <img 
                    src="/assets/images/cool-denim.jpg" 
                    alt="Suede-effect jacket" 
                    className="absolute inset-0 w-full h-full object-cover" />
                  <button className="absolute top-3 right-3 bg-white text-sm px-3 py-2 rounded-full shadow-sm w-30">
                    Overshirts
                  </button>
                </div>
                
                <div 
                  className="flex justify-between bg-white rounded-xl 
                  w-full max-w-xs mx-auto relative py-3 bottom-4 px-4 shadow-sm"
                  onClick={() => navigate('/products?q=string')}
                >
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
                  <img src="/assets/images/hoodie.jpg" alt="Hoodie" className="absolute inset-0 w-full h-full object-cover" />
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
                  <img src="/assets/images/sweat-shirt.jpg" alt="Hoodie" className="absolute inset-0 w-full h-full object-cover" />
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
                  <img src="/assets/images/woolen-denim.jpg" alt="Hoodie" className="absolute inset-0 w-full h-full object-cover" />
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
  )
}

export default FreshArrivals
