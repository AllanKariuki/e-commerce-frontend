import { Sliders, Star, X, Filter } from 'lucide-react'
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
    onClearFilters?: () => void;
}
const ProductsFilter: React.FC<ProductFilterProps> = ({
    minPrice = 0,
    maxPrice = 500,
    onPriceRangeChange,
    sizeFilter,
    onSizeChange,
    colorFilter,    
    onColorChange,
    ratingsFilter,
    setRatingsFilter,
    onClearFilters
}) => {
  // Count active filters
  const activeFiltersCount = [minPrice && minPrice > 0, maxPrice && maxPrice < 500, sizeFilter, colorFilter, ratingsFilter].filter(Boolean).length;

  const categories = [
    'T-Shirts', 'Hoodies', 'Jeans', 'Shoes', 'Accessories', 'Jackets', 'Sweaters', 'Shorts'
  ];

  const brands = [
    'Nike', 'Adidas', 'H&M', 'Zara', 'Uniqlo', 'Gap', 'Lacoste', 'Puma'
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-4 sticky top-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                {activeFiltersCount > 0 && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {activeFiltersCount}
                    </span>
                )}
            </div>
            {activeFiltersCount > 0 && (
                <button
                    onClick={onClearFilters}
                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                    <X size={14} />
                    Clear All
                </button>
            )}
        </div>

        <div className="grid grid-cols-1 gap-6">
            {/* Categories */}
            <div>
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Categories</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2" 
                            />
                            <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div>
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Brands</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2" 
                            />
                            <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">
                    Price Range
                </h3>
                <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Ksh.{minPrice}</span>
                        <span>Ksh.{maxPrice}</span>
                    </div>
                    <Slider
                        value={[minPrice, maxPrice]}
                        onChange={(_, value) => 
                            onPriceRangeChange({ min: (value as number[])[0], max: (value as number[])[1] })
                        }
                        valueLabelDisplay="auto"
                        min={0}
                        max={500}
                        step={10}
                        sx={{
                            color: '#3b82f6',
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#3b82f6',
                                border: '2px solid #ffffff',
                                '&:hover': {
                                    boxShadow: '0px 0px 0px 8px rgba(59, 130, 246, 0.16)',
                                },
                            },
                            '& .MuiSlider-track': {
                                backgroundColor: '#3b82f6',
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#e5e7eb',
                            },
                        }}
                    />
                </div>
            </div>

            {/* Size */}
            <div>
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Size</h3>
                <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                        key={size}
                        className={`
                            px-4 py-2 text-sm border-2 rounded-lg font-medium
                            transition-all duration-200 cursor-pointer 
                            ${sizeFilter === size 
                                ? 'border-blue-600 bg-blue-600 text-white shadow-md transform scale-105' 
                                : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                            }
                            `}
                        onClick={() => onSizeChange(size)}
                    >
                        {size}
                    </button>
                    ))}
                </div>
            </div>

            {/* Color */}
            <div>
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Color</h3>
                <div className="flex flex-wrap gap-3">
                    {[
                    { name: 'Black', color: 'bg-black' },
                    { name: 'White', color: 'bg-white border-2 border-gray-300' },
                    { name: 'Gray', color: 'bg-gray-500' },
                    { name: 'Navy', color: 'bg-blue-900' },
                    { name: 'Brown', color: 'bg-amber-800' },
                    { name: 'Red', color: 'bg-red-500' },
                    { name: 'Green', color: 'bg-green-600' },
                    { name: 'Blue', color: 'bg-blue-500' },
                    ].map(({ name, color }) => (
                    <div key={name} className="relative">
                        <button
                            className={`w-10 h-10 rounded-full ${color} hover:scale-110 transition-transform duration-200 
                            ${colorFilter === name 
                                ? 'ring-4 ring-blue-500 ring-offset-2 shadow-lg' 
                                : 'hover:shadow-md'
                            }`}
                            onClick={() => onColorChange(name)}
                            title={name}
                        />
                        {colorFilter === name && (
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-medium whitespace-nowrap">
                                {name}
                            </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <h3 className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Rating</h3>
                <div className="space-y-3">
                    {[5, 4, 3, 2].map(rating => (
                    <label key={rating} className="flex items-center cursor-pointer group">
                        <input 
                            type="radio" 
                            name="rating" 
                            value={rating}
                            checked={ratingsFilter === rating}
                            onChange={() => setRatingsFilter(rating)}
                            className="text-yellow-500 focus:ring-yellow-500 focus:ring-2"
                        />
                        <div className="ml-3 flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={16} 
                                    className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                            ))}
                            <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800">
                                {rating} stars & up
                            </span>
                        </div>
                    </label>
                    ))}
                </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 space-y-1">
                    <p className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Free shipping on orders over Ksh.2000
                    </p>
                    <p className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Easy 30-day returns
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsFilter;
