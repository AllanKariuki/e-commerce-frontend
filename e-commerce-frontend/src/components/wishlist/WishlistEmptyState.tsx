import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WishlistEmptyState: React.FC = () => {
    const navigate = useNavigate();

    const handleStartShopping = () => {
        navigate('/products');
    };

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="bg-gray-100 rounded-full p-8 mb-6">
                <Heart size={48} className="text-gray-400" />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Your wishlist is empty
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-md">
                Save your favorite items to your wishlist and never lose track of what you love.
                Start exploring our collection now!
            </p>
            
            <button
                onClick={handleStartShopping}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            >
                <ShoppingBag size={20} />
                Start Shopping
            </button>
            
            {/* Decorative elements */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xs opacity-20">
                <div className="h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
};

export default WishlistEmptyState;