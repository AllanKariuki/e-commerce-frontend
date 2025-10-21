import { Search, Menu, Info, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight, Plus, ArrowUpRight, Heart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../../redux/store';
import { fetchCategories, selectedCategories } from '../../redux/slices/categorySlice';
import { useEffect } from 'react';
import { cartItemsCount } from '../../redux/slices/cartSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);
  const params = new URLSearchParams(window.location.search);
  const type = params.get('category-name');
  const categories = useSelector(selectedCategories);
  const cartItems = useSelector(cartItemsCount);

  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, [dispatch]);

    return (
        <header className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <span className="font-bold text-xl">BR.</span>
              <span className="font-bold text-xl text-gray-300">F</span>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full py-2 px-10 text-sm bg-gray-100 rounded-full focus:outline-none"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Icons */}
            <div className="flex items-center space-x-6">
              <div className="relative cursor-pointer hover:shadow-md">
                <ShoppingBag size={20} onClick={() => navigate('/cart')} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              </div>
              <div className="relative cursor-pointer hover:shadow-md">
                <Heart 
                  size={20} 
                  onClick={() => navigate('/wishlist')}
                  className={wishlistCount > 0 ? 'text-red-500 fill-red-500' : 'text-gray-600'} 
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <User size={20} className="mx-auto mt-1" />
              </div>
            </div>
          </div>
          
          {/* Navigation Categories */}
          {/* <div className="container mx-auto px-4 py-3"> */}
            <div className="container mx-auto px-4 mt-6 mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center justify-between space-x-1 space-x-1 max-w-md rounded-full bg-gray-100 py-1 xl:w-80 px-3">
                    <span className="text-sm text-gray-400 font-medium">Categories</span>
                    <span className='bg-white rounded-full p-1.5'>
                      <ChevronDown size={16}  />
                    </span>
                    
                  </div>
                  
                  <div className="flex items-center justify-between space-x-1 max-w-md rounded-full bg-gray-100 py-1 xl:w-50 px-3">
                    <span className="text-sm text-gray-500">New Product</span>
                    <span className='bg-white rounded-full p-1.5'>
                      <ChevronDown size={16}  />
                    </span>
                  </div>
                  
                  <div className="flex-1 max-w-md xl:w-100 mx-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full py-2 px-10 text-sm bg-gray-100 rounded-full focus:outline-none"
                      />
                      <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 overflow-x-auto">
                  {categories.map((category, index) => {
                    return (
                      <button 
                        key={index}
                        onClick={() => navigate(`/products?category-name=${category.name}`)} 
                        className={`text-xs px-4 py-2 rounded-full border border-gray-200 cursor-pointer hover:border-gray-300 
                        ${type === category.name ? 'bg-black text-white hover:bg-black/80': 'bg-white text-black hover:bg-gray-50'}`}>
                        {category.name}
                      </button>
                    );
                  })}
                  
                </div>
              </div>
          </div>
          {/* </div> */}
        </header>
    )
}

export default Header;