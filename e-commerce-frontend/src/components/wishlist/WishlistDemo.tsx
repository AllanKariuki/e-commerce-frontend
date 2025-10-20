import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Package, Trash2, Plus } from 'lucide-react';
import { addToWishlist, clearWishlist } from '../../redux/store/wishlistSlice';
import { sampleWishlistItems } from '../../utils/sampleWishlistData';
import type { RootState } from '../../redux/store';

const WishlistDemo: React.FC = () => {
    const dispatch = useDispatch();
    const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

    const handleAddSampleItems = () => {
        sampleWishlistItems.forEach(item => {
            dispatch(addToWishlist({
                ...item,
                dateAdded: new Date().toISOString(),
            }));
        });
    };

    const handleClearWishlist = () => {
        dispatch(clearWishlist());
    };

    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
                <Package size={20} className="text-yellow-600" />
                <h3 className="font-semibold text-yellow-800">Demo Controls</h3>
            </div>
            
            <p className="text-yellow-700 text-sm mb-4">
                Current wishlist has <strong>{wishlistCount}</strong> items. 
                Use the controls below to test the wishlist functionality.
            </p>
            
            <div className="flex gap-2">
                <button
                    onClick={handleAddSampleItems}
                    className="flex items-center gap-2 bg-yellow-600 text-white px-3 py-1.5 rounded text-sm hover:bg-yellow-700 transition-colors duration-200"
                >
                    <Plus size={16} />
                    Add Sample Items
                </button>
                
                {wishlistCount > 0 && (
                    <button
                        onClick={handleClearWishlist}
                        className="flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded text-sm hover:bg-red-600 transition-colors duration-200"
                    >
                        <Trash2 size={16} />
                        Clear All
                    </button>
                )}
            </div>
        </div>
    );
};

export default WishlistDemo;