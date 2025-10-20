import React from 'react';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist } from '../../redux/store/wishlistSlice';
import type { WishlistItem } from '../../types/wishlist';

interface WishlistCardProps {
    item: WishlistItem;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromWishlist = () => {
        dispatch(removeFromWishlist(item.id));
    };

    const handleViewProduct = () => {
        navigate(`/product/${item.id}`);
    };

    const handleAddToCart = () => {
        // This would typically dispatch an action to add to cart
        console.log('Add to cart:', item.id);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={12}
                className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    const origPrice = Number(item.original_price);
    const currentPrice = Number(item.price);
    const discountPercentage = isFinite(origPrice) && origPrice > 0
        ? Math.round(((origPrice - currentPrice) / origPrice) * 100)
        : 0;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
            {/* Heart Icon - Always visible, filled when in wishlist */}
            <button
                onClick={handleRemoveFromWishlist}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-sm hover:bg-red-50 transition-colors duration-200"
            >
                <Heart 
                    size={18} 
                    className="text-red-500 fill-red-500"
                />
            </button>

            {/* Quick View Button */}
            <button
                onClick={handleViewProduct}
                className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 hover:bg-blue-50 transition-all duration-200"
            >
                <Eye size={16} className="text-gray-600" />
            </button>

            {/* Discount Badge */}
            {discountPercentage > 0 && (
                <div className="absolute top-12 left-3 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    -{discountPercentage}%
                </div>
            )}

            {/* Stock Status */}
            {!(item.units_in_stock > 0) && (
                <div className="absolute inset-0 bg-black/10 bg-opacity-90 z-10 flex items-center justify-center">
                    <span className="text-white font-medium">Out of Stock</span>
                </div>
            )}

            {/* Product Image */}
            <div className="h-72 overflow-hidden">
                <img 
                    src={item.main_image?.image || '/assets/images/cargo-pants.jpg'} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Brand */}
                {item.category_name && (
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        {item.category_name}
                    </span>
                )}
                
                {/* Product Name */}
                <h3 className="font-medium text-gray-900 text-sm mt-1 line-clamp-2">
                    {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                        {renderStars(item.rating || 0)}
                    </div>
                    <span className="text-xs text-gray-500">
                        {item.rating || 0} ({item.reviews.length})
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="font-semibold text-gray-900">
                        Ksh.{item.price}
                    </span>
                    {item.original_price && item.original_price > item.price && (
                        <span className="text-sm text-gray-500 line-through">
                            Ksh.{item.original_price}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={handleAddToCart}
                        disabled={item.units_in_stock === 0}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            item.units_in_stock > 0
                                ? 'bg-black text-white hover:bg-gray-800'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <ShoppingBag size={16} />
                        Add to Cart
                    </button>
                </div>

                {/* Date Added */}
                <div className="text-xs text-gray-400 mt-2">
                    Added {new Date(item.dateAdded).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;