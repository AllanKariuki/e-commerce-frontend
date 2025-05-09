import React, { useState } from 'react';
import { ShoppingBag, Plus } from 'lucide-react';

const ProductDetailCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden max-w-sm shadow-md mb-2 h-100 bg-gray-500 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Product Image Section */}
      <div className="relative">
        <img 
          src="/api/placeholder/400/500" 
          alt="Brown linen shirt" 
          className="w-full h-96 object-cover"
        />
        
        {/* Add to Favorites Button */}
        <button className="absolute top-4 right-4 rounded-full bg-white p-2">
          <Plus size={18} />
        </button>
      </div>

      {/* Product Details Section - Shown on Hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white p-5 space-y-5 transform transition-transform duration-300 ease-in-out rounded-t-3xl ${
            isHovering ? 'translate-y-0' : 'translate-y-full'
        }`}
        >
        {/* Category Tag */}
        <div className="flex">
          <span className="px-4 py-2 rounded-full border border-gray-200 text-sm">
            Men
          </span>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          {/* Product Thumbnail and Title */}
          <div className="flex items-start gap-3">
            <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
              <img 
                src="/api/placeholder/64/64" 
                alt="Product thumbnail" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h2 className="text-xl font-medium">100% linen Mao collar shirt</h2>
          </div>

          {/* Price Information */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-lg">$49.50</span>
            <span className="text-gray-500 line-through text-sm">$55.99</span>
          </div>

          {/* Product Reference */}
          <div className="flex items-center gap-3">
            {/* Color Options */}
            <div className="flex items-center gap-1">
              <span className="h-5 w-5 rounded-full bg-blue-400 ring-2 ring-offset-1 ring-blue-400"></span>
              <span className="h-5 w-5 rounded-full bg-stone-700"></span>
            </div>
            
            {/* Product Reference Code */}
            <span className="text-sm text-gray-500">REF. 67026730-CHENNAI-LH</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="bg-black text-white rounded-full py-3 px-6 flex-grow font-medium flex items-center justify-center">
            Buy now
          </button>
          <button className="rounded-full border border-gray-200 p-3">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;