import { Trash2, ShoppingCart, Check, ChevronRight, Plus, Minus } from 'lucide-react';
import type React from 'react';
import { useNavigate } from 'react-router-dom';

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  discountPercentage: number;
  deliveryFee: number;
  total: number;
  couponCode: string;
  setCouponCode: (code: string) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    subtotal,
    discount,
    discountPercentage,
    deliveryFee,
    total,
    couponCode,
    setCouponCode
}) => {
    const applyCoupon = () => {
        alert(`Applying coupon: ${couponCode}`);
        setCouponCode('');
      };
      const navigate = useNavigate();
    
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 my-5">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          
          {/* Coupon input field */}
          <div className="flex items-center mb-6 w-full max-w-md bg-gray-100 rounded-full py-1 px-1">
            <input
              type="email"
              placeholder="Coupon Code" 
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-4 py-2 text-sm decoration-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button 
              onClick={applyCoupon}
              className="w-36 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
              Apply
            </button>
          </div>
        
          
          {/* Price breakdown */}
          <div className="space-y-5 text-sm">
            <div className="flex justify-between">
              <span className='text-gray-500'>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className='text-gray-500'>Discount ({discountPercentage}%)</span>
              <span className='text-red-500'>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className='text-gray-500'>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
          
          {/* Checkout button */}
          <button 
            className="w-full bg-black text-white 
            rounded-3xl py-3 flex items-center justify-center mt-6" 
            onClick={() => navigate('/checkout')}
          >
            Go to Checkout
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      );
}

export default OrderSummary;