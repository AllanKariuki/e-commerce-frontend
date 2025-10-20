import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, Filter, Grid3X3, List, Trash2, ShoppingBag } from 'lucide-react';
import type { RootState } from '../redux/store';
import { clearWishlist, selectInStockItemsFromRoot, selectOutOfStockItemsFromRoot } from '../redux/store/wishlistSlice';
import WishlistCard from '../components/wishlist/WishlistCard';
import WishlistEmptyState from '../components/wishlist/WishlistEmptyState';
import WishlistDemo from '../components/wishlist/WishlistDemo';

const WishlistPage: React.FC = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state: RootState) => state.wishlist);
    const inStockItems = useSelector(selectInStockItemsFromRoot);
    const outOfStock = useSelector(selectOutOfStockItemsFromRoot);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'price-low' | 'price-high' | 'name'>('newest');
    const [filterBy, setFilterBy] = useState<'all' | 'in-stock' | 'on-sale'>('all');

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to remove all items from your wishlist?')) {
            dispatch(clearWishlist());
        }
    };

    const handleAddAllToCart = () => {
        if (inStockItems.length === 0) {
            alert('No items in stock to add to cart');
            return;
        }
        
        // This would typically dispatch actions to add each item to cart
        console.log('Adding all in-stock items to cart:', inStockItems);
        alert(`Added ${inStockItems.length} items to cart!`);
    };

    // Filter and sort items
    const filteredAndSortedItems = React.useMemo(() => {
        let filtered = [...items];

        // Apply filters
        switch (filterBy) {
            case 'in-stock':
                filtered = inStockItems;
                break;
            case 'on-sale':
                filtered = outOfStock;
                break;
            default:
                break;
        }

        // Apply sorting
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
                case 'oldest':
                    return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
                case 'price-low':
                    return (Number(a.price) || 0) - (Number(b.price) || 0);
                case 'price-high':
                    return (Number(b.price) || 0) - (Number(a.price) || 0);
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [items, filterBy, sortBy, inStockItems, outOfStock]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Demo Controls */}
            <WishlistDemo />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Heart size={28} className="text-red-500" />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>
                        <p className="text-gray-600">
                            {items.length} {items.length === 1 ? 'item' : 'items'} saved
                        </p>
                    </div>
                </div>
                
                {items.length > 0 && (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAddAllToCart}
                            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                            <ShoppingBag size={16} />
                            Add All to Cart
                        </button>
                        <button
                            onClick={handleClearAll}
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                            <Trash2 size={16} />
                            Clear All
                        </button>
                    </div>
                )}
            </div>

            {items.length === 0 ? (
                <WishlistEmptyState />
            ) : (
                <>
                    {/* Controls */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                        {/* View Mode */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">View:</span>
                            <div className="flex bg-white rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                        viewMode === 'grid' 
                                            ? 'bg-black text-white' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <Grid3X3 size={16} />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                        viewMode === 'list' 
                                            ? 'bg-black text-white' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <List size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Sort and Filter */}
                        <div className="flex items-center gap-4">
                            {/* Filter */}
                            <div className="flex items-center gap-2">
                                <Filter size={16} className="text-gray-600" />
                                <select
                                    value={filterBy}
                                    onChange={(e) => setFilterBy(e.target.value as any)}
                                    className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    <option value="all">All Items</option>
                                    <option value="in-stock">In Stock</option>
                                    <option value="on-sale">On Sale</option>
                                </select>
                            </div>

                            {/* Sort */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing {filteredAndSortedItems.length} of {items.length} items
                        </p>
                    </div>

                    {/* Products Grid/List */}
                    {filteredAndSortedItems.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No items match your current filters.</p>
                        </div>
                    ) : (
                        <div className={`${
                            viewMode === 'grid' 
                                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                                : 'space-y-4'
                        }`}>
                            {filteredAndSortedItems.map((item) => (
                                <WishlistCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default WishlistPage;