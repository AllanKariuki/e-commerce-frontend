import { useState } from "react";
import { Heart, ShoppingCart, ChevronDown, ShoppingBag, Truck, Star, ChevronDownCircle, ChevronRightCircle, ChevronLeftCircle,  } from 'lucide-react';


const ProductDetails = () => {
    const [ selectedSize, setSelectedSize ] = useState('41');

    const sizes = [ 41, 42, 43, 44, 45 ];
    const colors = [
        { name: 'Grey', value: 'bg-gray-200' },
        { name: 'White', value: 'bg-white border border-gray-200' },
        { name: 'Black', value: 'bg-black' },
    ];
    const [ selectedColor, setSelectedColor ] = useState(colors[0].name);

    return (
        <div>
            <div className="flex my-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                        alt="Product" 
                        className="w-5 h-5 object-contain invert"
                    />
                </div>
                <span className="ml-2 text-gray-500 text-sm">H01125SD-0_B</span>
            </div>

            <h1 className="text-4xl font-medium my-4">Shoes Reebok Zig Kinetica 3</h1>
      
      <div className="flex items-center my-4">
        <div className="flex text-yellow-400">
          {[1, 2, 3, 4].map((star) => (
            <Star key={star} size={16} fill="currentColor" />
          ))}
        </div>
        <span className="text-sm text-gray-500 ml-2">48 reviews</span>
      </div>
      
      <div className="text-5xl font-bold mb-6">$199.00</div>
      
      <div className="mb-4">
        <div className="font-medium mb-2">Color </div>
        <div className="flex space-x-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-md ${color.value} ${selectedColor === color.name ? 'ring-1 shadow-md ring-gray-300' : ''}`}
              onClick={() => setSelectedColor(color.name)}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Size</span>
      
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`py-2 px-4 text-center rounded-md border border-gray-200 ${
                selectedSize === size 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button className="text-sm text-gray-500">Size guide</button>
      </div>
      
      <div className="flex mb-4">
        <button className="flex-1 bg-black text-white py-3 px-6 flex items-center justify-center rounded-md hover:shadow-md">
          <ShoppingBag size={20} className="mr-2" />
          Add to cart
        </button>
        <button className="ml-2 p-3 bg-gray-100 rounded-lg hover:shadow-md">
          <Heart size={20} />
        </button>
      </div>
      
      <div className="py-3 text-sm flex items-center">
        <Truck size={16} className="mr-2" />
        Free delivery on orders over $150
      </div>


        </div>
    )
}

export default ProductDetails;