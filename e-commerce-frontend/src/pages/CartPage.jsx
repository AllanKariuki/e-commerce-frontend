import { useState } from 'react';
import { Trash2, ShoppingCart, Check, ChevronRight, Plus, Minus } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CheckoutSteps from '../components/cart/CheckoutSteps';
import OrderSummary from '../components/cart/OrderSummary';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
          id: 1,
          name: 'N20 Gas',
          size: 'Small',
          color: 'White',
          price: 145,
          quantity: 2,
          image: '/api/placeholder/50/50'
        },
        {
          id: 2,
          name: 'Laughing Gas',
          size: 'Medium',
          color: 'Red',
          price: 180,
          quantity: 4,
          image: '/api/placeholder/50/50'
        },
        {
          id: 3,
          name: 'Ammonium Gas',
          size: 'Large',
          color: 'Blue',
          price: 240,
          quantity: 6,
          image: '/api/placeholder/50/50'
        }
      ]);
    
      const [selectAll, setSelectAll] = useState(false);
      const [couponCode, setCouponCode] = useState('');
      const discountPercentage = 20;
    
      // Calculate totals
      const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const discount = subtotal * (discountPercentage / 100);
      const deliveryFee = 15;
      const total = subtotal - discount + deliveryFee;
    
      // Handle quantity changes
      const updateQuantity = (id, newQuantity) => {
        if (newQuantity >= 1) {
          setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
          ));
        }
      };
    
      // Handle item deletion
      const deleteSelectedItems = () => {
        // In a real app, you would delete selected items
        alert('Delete functionality would remove selected items');
      };
    
      return (
        <div className="max-w-5/6 mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
          
          {/* Checkout Process Indicator */}
          {/* <CheckoutSteps currentStep={1} /> */}
          
          <div className="mt-8 flex flex-col lg:flex-row gap-6">
            {/* Cart Items Section */}
            <div className="flex-grow">
              <h2 className="text-xl font-medium mb-4">Your cart</h2>
              
              <div 
                className="flex 
                    justify-between 
                    items-center 
                    mb-4 pb-2 p-3
                    border-1 
                    border-gray-200 
                    rounded-full"
                >
                <label className="flex items-center">
                <input 
                    type="checkbox" 
                    checked={selectAll} 
                    onChange={() => setSelectAll(!selectAll)}
                    className="mr-2"
                />
                <span>Select All</span>
                </label>
                <button 
                onClick={deleteSelectedItems}
                className="bg-black
                text-white 
                py-3 px-5 rounded-3xl text-sm flex 
                items-center"
                >
                Delete
                </button>
            </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                {/* Header with select all and delete */}
                
                
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      updateQuantity={updateQuantity}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary Section */}
            <div className="w-full lg:w-96">
              <OrderSummary 
                subtotal={subtotal}
                discount={discount}
                discountPercentage={discountPercentage}
                deliveryFee={deliveryFee}
                total={total}
                couponCode={couponCode}
                setCouponCode={setCouponCode}
              />
            </div>
          </div>
        </div>
      );
    
}

export default CartPage;