import React, { useEffect, useRef } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import WishlistButton from '../wishlist/WishlistButton';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentViews, selectFetchError, selectLoading, selectRecentProducts } from '../../redux/slices/recentViewsSlice';
import type { AppDispatch } from '../../redux/store';

interface RecentFindsItemProps {
    product: Product;
}

export const RecentFindsCard: React.FC<RecentFindsItemProps> = ({
    product
}) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={12}
                className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    const navigate = useNavigate();

    return (
        <div className="rounded-2xl overflow-hidden relative group hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="aspect-square relative overflow-hidden rounded-b-2xl">
                <img 
                    src={ product.main_image?.image || '/assets/images/cargo-pants.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                
                {/* Quick View Button */}
                <button 
                    className="absolute bottom-3 left-3 bg-gray-50 rounded-full px-4 py-2 
                    text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    Quick View
                </button>

                {/* Wishlist Button */}
                <div className="absolute bottom-3 right-3">
                    <WishlistButton 
                        item={product}
                        className="bg-white text-gray-900 hover:bg-gray-100 cursor-pointer"
                        size={16}
                    />
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4 bg-white">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.category_name}
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-2">
                    {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                        {renderStars(product.rating || 0)}
                    </div>
                    <span className="text-xs text-gray-500">
                        {product.rating || 0} ({product.reviews.length})
                    </span>
                </div>

                {/* Price */}
                <div className="font-semibold text-gray-900">
                    Ksh.{product.price}
                </div>
            </div>
        </div>
    );
};

const RecentFinds: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectFetchError);
    const recentFindsData = useSelector(selectRecentProducts);

    useEffect(() => {
        dispatch(fetchRecentViews() as any);
    }, [dispatch]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -272, // Width of one card (256px) + gap (16px) = 272px
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 272, // Width of one card (256px) + gap (16px) = 272px
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
                <div className="flex align-baseline items-center gap-2">
                    <span className="text-lg font-medium py-2 rounded-full text-gray-800">
                        Your recent finds
                    </span>
                    <ChevronRight size={20} className='text-gray-800'/>
                </div>
                
                <div className="flex items-center gap-4">
                    {/* Navigation Controls */}
                    <div className="flex gap-2">
                        <button 
                            onClick={scrollLeft}
                            className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 transition-all duration-200"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button 
                            onClick={scrollRight}
                            className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 transition-all duration-200"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                    
                    <button 
                        className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                        onClick={() => navigate('/recent-views')}
                    >
                        View All
                    </button>
                </div>
            </div>
            
            {/* Horizontal Scrollable Container - Show exactly 4 items */}
            { isLoading ? (
                <p className="text-center text-gray-500 mt-20">Loading recent finds...</p>
            ): error ? (
                <p className="text-center text-red-500 mt-20">Error loading recent finds: {error}</p>
            ): (
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        width: '100%',
                        maxWidth: '1104px', // 4 cards * 256px + 3 gaps * 16px = 1104px
                    }}
                >
                    {recentFindsData.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-64">
                            <RecentFindsCard product={item} />
                        </div>
                    ))}
                </div>
            )}
            
            
            <style dangerouslySetInnerHTML={{
                __html: `
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `
            }} />
        </div>
    );
};

export default RecentFinds;
