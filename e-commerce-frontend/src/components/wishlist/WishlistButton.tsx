import React from 'react';
import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../store/wishlistSlice';
import type { RootState } from '../../store';
import type { WishlistItem } from '../../types/wishlist';

interface WishlistButtonProps {
    item: Omit<WishlistItem, 'dateAdded'>;
    className?: string;
    size?: number;
    showTooltip?: boolean;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ 
    item, 
    className = '', 
    size = 18, 
    showTooltip = true 
}) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    
    const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isInWishlist) {
            dispatch(removeFromWishlist(item.id));
        } else {
            dispatch(addToWishlist({
                ...item,
                dateAdded: new Date().toISOString(),
            }));
        }
    };

    return (
        <button
            onClick={handleToggleWishlist}
            className={`relative p-2 rounded-full transition-all duration-200 hover:scale-110 ${className}`}
            title={showTooltip ? (isInWishlist ? 'Remove from wishlist' : 'Add to wishlist') : undefined}
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
            <Heart 
                size={size} 
                className={`transition-colors duration-200 ${
                    isInWishlist 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-400 hover:text-red-500'
                }`}
            />
            
            {/* Pulse animation when added */}
            {isInWishlist && (
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-pulse" />
            )}
        </button>
    );
};

export default WishlistButton;