import { useState } from 'react';
import { Trash2, ShoppingCart, Check, ChevronRight, Plus, Minus, ShoppingBag } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CheckoutSteps from '../components/cart/CheckoutSteps';
import OrderSummary from '../components/cart/OrderSummary';
import type { CartItemType } from '../types/cart';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { cartDeliveryFee, cartDiscount, cartError, cartIsLoading, cartItems, cartPercentageDiscount, cartSubtotal, cartTotalAmount, removeItemFromCart, updateItemQuantity } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
       const dispatch = useDispatch<AppDispatch>();
       const navigate = useNavigate();
       const isLoading = useSelector(cartIsLoading);
       const error = useSelector(cartError);
       const cartList = useSelector(cartItems);
       const subtotal = useSelector(cartSubtotal);
       const totalAmount = useSelector(cartTotalAmount);
       const discount = useSelector(cartDiscount);
       const discountPercentage = useSelector(cartPercentageDiscount);
       const deliveryFee = useSelector(cartDeliveryFee);
    
      const [selectAll, setSelectAll] = useState<boolean>(false);
      const [couponCode, setCouponCode] = useState<string>('');
      // const discountPercentage = 20;
    
      // // Calculate totals
      // const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      // const discount = subtotal * (discountPercentage / 100);
      // const deliveryFee = 15;
      // const total = subtotal - discount + deliveryFee;
    
      // Handle quantity changes
      const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity >= 1) {
          dispatch(updateItemQuantity({
            id,
            quantity: newQuantity
          }) as any);
        }
      };

      const handleRemoveItem = (id: number) => {
        dispatch(removeItemFromCart(id) as any);
      }
    
      // Handle item deletion
      const deleteSelectedItems = () => {
        // In a real app, you would delete selected items
        alert('Delete functionality would remove selected items');
      };
    
      return (
        <div className="max-w-7/8 mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
          
          {/* Checkout Process Indicator */}
          {/* <CheckoutSteps currentStep={1} /> */}
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items Section */}
            <div className="grid col-span-2">
              <h2 className="text-xl font-medium mb-4">Your cart</h2>
              {
                isLoading ? (
                  <div className="text-center py-20 text-lg">Loading cart items...</div>
                ) : error ? (
                  <div className="text-center py-20 text-lg text-red-500">Error loading cart items: {error}</div>
                ) : cartList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <ShoppingCart size={48} className="mb-4" />
                    <p className="text-lg">Your cart is currently empty.</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 my-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                    >
                        <ShoppingBag size={20} />
                        Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-4">
                    {/* Header with select all and delete */}
                    <div
                      className="flex 
                          justify-between 
                          items-center 
                          mb-4 h-16 pb-2 p-3
                          border-1 
                          border-gray-200 
                          rounded-full "
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
                    
                    {/* Cart Items */}
                    <div className="space-y-4">
                      {cartList.map(item => (
                        <CartItem 
                          key={item.item.id} 
                          item={item} 
                          updateQuantity={updateQuantity}
                          removeItem={handleRemoveItem}
                        />
                      ))}
                    </div>
                  </div>
                )
              }
                
            </div>
            
            {/* Order Summary Section */}
            <div className="w-full lg:w-96 h-full">
              <OrderSummary 
                subtotal={subtotal}
                discount={discount}
                discountPercentage={discountPercentage}
                deliveryFee={deliveryFee}
                total={totalAmount}
                couponCode={couponCode}
                setCouponCode={setCouponCode}
              />
            </div>
          </div>
        </div>
      );
    
}

export default CartPage;