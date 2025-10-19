import { Sliders, Star } from 'lucide-react'
import React from 'react'
import Slider from "@mui/material/Slider";


interface ProductFilterProps {
    minPrice?: number;
    maxPrice?: number;
    sizeFilter?: string;
    colorFilter?: string;
    ratingsFilter?: number;
    setRatingsFilter: (rating: number | undefined) => void;
    onPriceRangeChange: (priceRange: { min?: number; max?: number }) => void;
    onSizeChange: (size: string) => void;
    onColorChange: (color: string) => void;
}
const ProductsFilter: React.FC<ProductFilterProps> = ({
    minPrice = 0,
    maxPrice = 10,
    onPriceRangeChange,
    sizeFilter,
    onSizeChange,
    colorFilter,    
    onColorChange,
    ratingsFilter,
    setRatingsFilter
}) => {
  return (
    <div className="bg-white rounded-lg p-6 mt-4">
        <div className="grid grid-cols-1 gap-6">
            <div>
            <h3 className="font-medium text-gray-900 mb-3">Price Range Ksh.{minPrice} - Ksh.{maxPrice}</h3>
            
            <Slider
                value={[minPrice, maxPrice]}
                onChange={(_, value) => 
                    onPriceRangeChange({ min: (value as number[])[0], max: (value as number[])[1] })
                }
                valueLabelDisplay="auto"
                min={0}
                max={500}
                step={10}
            />
            </div>

            <div>
            <h3 className="font-medium text-gray-900 mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                    key={size}
                    className={`
                        px-3 py-1 text-sm border border-gray-300 rounded 
                        hover:border-black transition-colors cursor-pointer 
                        ${sizeFilter === size ? 'border-2-black bg-black text-white shadow-md' : ''}
                        `}
                    onClick={() => onSizeChange(size)}
                >
                    {size}
                </button>
                ))}
            </div>
            </div>

            <div>
            <h3 className="font-medium text-gray-900 mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
                {[
                { name: 'Black', color: 'bg-black' },
                { name: 'White', color: 'bg-white border border-gray-300' },
                { name: 'Gray', color: 'bg-gray-500' },
                { name: 'Navy', color: 'bg-blue-900' },
                { name: 'Brown', color: 'bg-amber-800' },
                ].map(({ name, color }) => (
                <button
                    key={name}
                    className={`w-8 h-8 rounded-full ${color} hover:scale-110 transition-transform ${colorFilter === name ? 'ring-2 ring-black' : ''}`}
                    onClick={() => onColorChange(name)}
                    title={name}
                />
                ))}
            </div>
            </div>

            <div>
            <h3 className="font-medium text-gray-900 mb-3">Rating</h3>
            <div className="space-y-2">
                {[5, 4, 3].map(rating => (
                <label key={rating} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <div className="ml-2 flex items-center">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-gray-700">& up</span>
                    </div>
                </label>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsFilter;
