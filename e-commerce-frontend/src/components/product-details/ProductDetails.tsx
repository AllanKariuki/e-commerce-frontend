import React, { useState } from "react";
import { Heart, ShoppingCart, ChevronDown, Dot, ShoppingBag, Truck, Star, ChevronDownCircle, ChevronRightCircle, ChevronLeftCircle,  } from 'lucide-react';
import type { Product } from "../../types/product";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";

interface ProductDetailSectionProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailSectionProps> = ({ product }) => {
    const [ selectedSize, setSelectedSize ] = useState(product?.sizes ? product.sizes[0] : '');
    const dispatch = useDispatch();

    const sizes = product?.sizes || [];
    
    const colors = product?.colors ? product.colors.map(color => {
        return { name: color, value: `bg-${color.toLowerCase()}-200` }
    }) : [];

    const [ selectedColor, setSelectedColor ] = useState(colors.length > 0 ? colors[0].name : '');
    

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        // Dispatch add to cart action here
        dispatch(addItemToCart(
          {
            item: product,
            size: selectedSize || (product.sizes ? product.sizes[0] : 'M'),
            color: selectedColor || (product.colors ? product.colors[0] : 'Default'),
            quantity: 1,
            totalDiscount: product.discount ? product.discount : 0,
            percentageDiscount: product.discount_percentage ? product.discount_percentage : 0,
            total: parseFloat(product.price)
          }
        ))
    }

    return (
        <div>
            <div className="flex items-center my-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1601758123927-2f3c4b8a1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                        alt="Product" 
                        className="w-5 h-5 object-contain invert"
                    />
                </div>
                <span className="ml-2 text-gray-500 text-sm">{product.id}</span>
            </div>

            <h1 className="text-4xl font-medium my-4">{product.name}</h1>

            <div className="flex items-center my-8">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">{product.reviews.length} reviews</span>
            </div>

            <div className="text-5xl font-bold my-12">Ksh. {product.price}</div>
      
            <div className="mb-4">
              <div className="font-medium mb-2 flex">Color
                <Dot className="text-gray-200 rounded-full" />
                <span className="text-gray-300">{selectedColor}</span>
              </div>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-12 h-16 rounded-md ${color.value} ${selectedColor === color.name ? 'ring-1 shadow-md ring-gray-300' : ''}`}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
      
            <div className="my-8">
              <div className="flex justify-between items-center my-2">
                <div className="font-medium flex">
                  Size
                  <Dot className="text-gray-200 rounded-full"/> 
                  <span className="text-gray-300">EU Men</span>
                </div>
            
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
      
            <div className="flex mb-2">
              <button 
                className="flex-1 bg-black text-white py-3 px-6 flex items-center justify-center rounded-md hover:shadow-md"
                onClick={handleAddToCart}
                >
                <ShoppingBag size={20} className="mr-2" />
                Add to cart
              </button>
              <button className="ml-2 p-3 bg-gray-100 rounded-lg hover:shadow-md">
                <Heart size={20} />
              </button>
            </div>
      
            <div className="py-3 text-sm flex items-center">
              <Truck size={16} className="mr-2" />
              Free delivery on orders over Ksh 9, 500
            </div>


        </div>
    )
}

export default ProductDetails;