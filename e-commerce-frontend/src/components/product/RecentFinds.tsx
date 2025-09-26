import React, { useRef } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import WishlistButton from '../wishlist/WishlistButton';

// Import images
import coolDenim from '../../assets/images/cool-denim.jpg';
import hoodie from '../../assets/images/hoodie.jpg';
import sweatShirt from '../../assets/images/sweat-shirt.jpg';
import woolenDenim from '../../assets/images/woolen-denim.jpg';
import { useNavigate } from 'react-router-dom';

interface RecentFindsItemProps {
    id: string;
    name: string;
    brand: string;
    price: number;
    rating: number;
    reviewCount: number;
    image: string;
    inStock?: boolean;
}

const recentFindsData: RecentFindsItemProps[] = [
    {
        id: 'rf1',
        name: 'Premium Hoodie',
        brand: 'Nike',
        price: 50,
        rating: 4.2,
        reviewCount: 12,
        image: hoodie,
        inStock: true,
    },
    {
        id: 'rf2',
        name: 'Classic Denim',
        brand: 'Lacoste',
        price: 60,
        rating: 4.2,
        reviewCount: 12,
        image: coolDenim,
        inStock: true,
    },
    {
        id: 'rf3',
        name: 'Comfort Hoodie',
        brand: 'GAP',
        price: 50,
        rating: 4.2,
        reviewCount: 12,
        image: sweatShirt,
        inStock: true,
    },
    {
        id: 'rf4',
        name: 'Urban Style',
        brand: 'Adien Selly',
        price: 50,
        rating: 4.2,
        reviewCount: 12,
        image: woolenDenim,
        inStock: true,
    },
    {
        id: 'rf5',
        name: 'Some wear',
        brand: 'Adien Selly',
        price: 50,
        rating: 4.2,
        reviewCount: 12,
        image: woolenDenim,
        inStock: true,
    },
    {
        id: 'rf4',
        name: 'Classic Style',
        brand: 'Adien Selly',
        price: 50,
        rating: 4.2,
        reviewCount: 12,
        image: woolenDenim,
        inStock: true,
    },
];

const RecentFindsCard: React.FC<RecentFindsItemProps> = ({
    id,
    name,
    brand,
    price,
    rating,
    reviewCount,
    image,
    inStock = true
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

    const wishlistItem = {
        id,
        name,
        price,
        image,
        brand,
        rating,
        reviewCount,
        category: 'Recent Finds',
        inStock,
    };

    const navigate = useNavigate();

    return (
        <div className="rounded-2xl overflow-hidden relative group hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="aspect-square relative overflow-hidden rounded-b-2xl">
                <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                
                {/* Quick View Button */}
                <button 
                    className="absolute bottom-3 left-3 bg-gray-50 rounded-full px-4 py-2 
                    text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/product/${id}`)}
                >
                    Quick View
                </button>

                {/* Wishlist Button */}
                <div className="absolute bottom-3 right-3">
                    <WishlistButton 
                        item={wishlistItem}
                        className="bg-white text-gray-900 hover:bg-gray-100 cursor-pointer"
                        size={16}
                    />
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4 bg-white">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {brand}
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-2">
                    {name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                        {renderStars(rating)}
                    </div>
                    <span className="text-xs text-gray-500">
                        {rating} ({reviewCount})
                    </span>
                </div>

                {/* Price */}
                <div className="font-semibold text-gray-900">
                    ${price}
                </div>
            </div>
        </div>
    );
};

const RecentFinds: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
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
                    
                    <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        View All
                    </button>
                </div>
            </div>
            
            {/* Horizontal Scrollable Container */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {recentFindsData.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                        <RecentFindsCard {...item} />
                    </div>
                ))}
            </div>
            
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
