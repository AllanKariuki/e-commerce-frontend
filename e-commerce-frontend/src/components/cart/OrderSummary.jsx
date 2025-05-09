import { Trash2, ShoppingCart, Check, ChevronRight, Plus, Minus } from 'lucide-react';

const OrderSummary = ({
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
    
      return (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          
          {/* Coupon input field */}
          <div className="flex mb-6">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-grow border rounded-l-md px-3 py-2 text-sm"
            />
            <button 
              onClick={applyCoupon}
              className="bg-gray-800 text-white px-4 py-2 rounded-r-md text-sm"
            >
              Apply
            </button>
          </div>
          
          {/* Price breakdown */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount ({discountPercentage}%)</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
          
          {/* Checkout button */}
          <button className="w-full bg-gray-800 text-white rounded-md py-3 flex items-center justify-center mt-6">
            Go to Checkout
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      );
}

export default OrderSummary;