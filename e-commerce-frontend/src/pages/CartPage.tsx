import { useState } from 'react';
import { Trash2, ShoppingCart, Check, ChevronRight, Plus, Minus } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CheckoutSteps from '../components/cart/CheckoutSteps';
import OrderSummary from '../components/cart/OrderSummary';
import type { CartItemType } from '../types/cart';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { cartDeliveryFee, cartDiscount, cartError, cartIsLoading, cartItems, cartSubtotal, cartTotalAmount, removeItemFromCart } from '../redux/slices/cartSlice';

const CartPage = () => {
       const dispatch = useDispatch<AppDispatch>();
       const isLoading = useSelector(cartIsLoading);
       const error = useSelector(cartError);
       const cartList = useSelector(cartItems);
       const subtotal = useSelector(cartSubtotal);
       const totalAmount = useSelector(cartTotalAmount);
       const discount = useSelector(cartDiscount);
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
      const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity >= 1) {
          dispatch(updateQuantity( id, {quantity: newQuantity} ) as any);
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
                      removeItem={handleRemoveItem}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary Section */}
            <div className="w-full lg:w-96 h-full">
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