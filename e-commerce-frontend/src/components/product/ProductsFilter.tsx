import { Star } from 'lucide-react'
import React from 'react'

const ProductsFilter = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-4">
        <div className="grid grid-cols-1 gap-6">
            <div>
            <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-700">Under $50</span>
                </label>
                <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-700">$50 - $100</span>
                </label>
                <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-700">Over $100</span>
                </label>
            </div>
            </div>

            <div>
            <h3 className="font-medium text-gray-900 mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                    key={size}
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:border-black transition-colors"
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
                    className={`w-8 h-8 rounded-full ${color} hover:scale-110 transition-transform`}
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
