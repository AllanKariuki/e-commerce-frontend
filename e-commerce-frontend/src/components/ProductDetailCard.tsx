import React, { useState } from 'react';
import { ShoppingBag, Plus, Heart } from 'lucide-react';
import type { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';

interface ProductDetailCardProps {
  product: Product;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden max-w-sm shadow-md mb-2 h-120 relative cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Product Image Section */}
      <div className="relative h-full w-full">
        <img 
          src={ product.main_image?.image || '/assets/images/cargo-pants.jpg'}
          alt="Brown linen shirt" 
          className="w-full h-full object-cover"
        />

        <div className={`absolute top-4 left-4 transition-all duration-300 opacity-100 translate-y-0 cursor-pointer`}>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center cursor-pointer justify-center mb-2 transition-colors ${
                isFavorited 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
            >
              <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
            </button>
          </div>
        
        {/* Add to Favorites Button */}
        <button className="absolute top-4 right-4 rounded-full bg-white p-2 cursor-pointer">
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
            {product.category_name}
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
            <div className="space-y-2">
              <h2 className="text-xl font-medium">{product.name}</h2>
              <h2 className="text-md font-small">{product.description}</h2>
            </div>
            
          </div>

          {/* Price Information */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-lg">Ksh. {product.price}</span>
            {/* Show this if the image has discount */}
            {/* <span className="text-gray-500 line-through text-sm">Ksh. 55.99</span> */}
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