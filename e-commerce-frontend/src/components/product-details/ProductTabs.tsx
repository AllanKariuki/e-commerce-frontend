import React, { useState } from 'react';
import ReviewsContent from './ReviewsContent';
import type { Product } from '../../types/product';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('Details');
  const tabs = ['Details', 'Reviews', 'Discussion'];
  const reviews = product?.reviews || [];
  const details = product?.description || '';
  
  return (
    <div className="mt-12">
      <div className="border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium ${
                activeTab === tab 
                ? 'border-b-2 border-black' 
                : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {activeTab === 'Reviews' && <ReviewsContent reviews={reviews} />}
    </div>
  );
}

export default ProductTabs;