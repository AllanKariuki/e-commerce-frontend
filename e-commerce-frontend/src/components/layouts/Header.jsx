const Header = () => {
    return (
        <header className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
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
              <div className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs w-4 h-4 rounded-full flex items-center justify-center">4</span>
              </div>
              <Heart size={20} />
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
                
                <div className="flex items-center space-x-2">
                  <button className="bg-black text-white text-xs px-4 py-2 rounded-full">
                    Men
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Women
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Children
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Sports 
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Brands
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    New 
                  </button>
                  <button className="bg-white text-black text-xs px-4 py-2 rounded-full border border-gray-200">
                    Sale
                  </button>
                </div>
              </div>
          </div>
          {/* </div> */}
        </header>
    )
}

export default Header;