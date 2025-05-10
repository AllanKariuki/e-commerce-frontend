import React, { useState } from 'react';
import { CreditCard, ChevronRight, ArrowLeft, Truck, Package, Clock, MapPin } from 'lucide-react';
import PaymentCard from '../components/checkout/PaymentCard';
import PaymentMethodOption from '../components/checkout/PaymentMethodOption';
import DeliveryMethodOption from '../components/checkout/DeliveryMethodOption';

const Checkout = () => {
 const [selectedPayment, setSelectedPayment] = useState("apple");
  const [selectedDelivery, setSelectedDelivery] = useState("same-day");
  
  const subtotal = 581.00;
  const discount = 100;
  const discountPercentage = 15;
  const deliveryFee = 30;
  const total = subtotal - discount + deliveryFee;
  const itemCount = 36;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main checkout area */}
      <div className="flex-1 p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <button className="flex items-center text-gray-500 text-sm">
            <ArrowLeft size={16} className="mr-1" /> Back to card
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-1">Checkout</h1>
        <p className="text-gray-500 mb-8">a checkout is a counter where you pay for things you are buying</p>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">1. Contact information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm text-gray-500">First Name</label>
              <div className="flex items-center">
                <input 
                  type="text" 
                  className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" 
                  defaultValue="Fredrik jr."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-500">Last Name</label>
              <input 
                type="text" 
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" 
                defaultValue="Ivarsson"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-500">Phone Number</label>
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <div className="mr-2">
                    <img src="/api/placeholder/24/16" alt="Sweden flag" className="w-6" />
                  </div>
                  <span className="text-sm text-gray-600">+46</span>
                </div>
                <input 
                  type="tel" 
                  className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" 
                  defaultValue="311 223 721"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-500">Email</label>
              <input 
                type="email" 
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" 
                defaultValue="Fredrikjr@readysetgaps.com"
              />
            </div>
          </div>
        </div>

        {/* Delivery Method */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">2. Delivery method</h2>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <DeliveryMethodOption 
              icon={<Truck size={18} />} 
              label="Same-day" 
              selected={selectedDelivery === "same-day"}
              onClick={() => setSelectedDelivery("same-day")} 
            />
            <DeliveryMethodOption 
              icon={<Package size={18} />} 
              label="Express" 
              selected={selectedDelivery === "express"}
              onClick={() => setSelectedDelivery("express")} 
            />
            <DeliveryMethodOption 
              icon={<Clock size={18} />} 
              label="Normal" 
              selected={selectedDelivery === "normal"}
              onClick={() => setSelectedDelivery("normal")} 
            />
          </div>
          <div className="flex items-start">
            <MapPin size={20} className="mr-2 mt-1 text-gray-400" />
            <div>
              <label className="block text-sm text-gray-500 mb-1">Zip code</label>
              <input 
                type="text" 
                className="w-32 border-b border-gray-200 py-2 focus:outline-none focus:border-black" 
                defaultValue="05488"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-lg font-semibold mb-4">3. Payment method</h2>
          <div className="grid grid-cols-3 gap-3">
            <PaymentMethodOption 
              selected={selectedPayment === "google"} 
              onClick={() => setSelectedPayment("google")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill={selectedPayment === "google" ? "white" : "#F1F1F1"} />
                <path d="M12 8V12H16.5C16.2 13.4 15.2 14.5 12 14.5C9.2 14.5 7 12.2 7 9.5C7 6.8 9.2 4.5 12 4.5C13.4 4.5 14.5 5 15.3 5.8L17.9 3.2C16.1 1.5 14.2 0.7 12 0.7C7.1 0.7 3 4.8 3 9.7C3 14.6 7.1 18.7 12 18.7C20 18.7 21 11.5 20 8H12Z" fill={selectedPayment === "google" ? "white" : "#757575"} />
              </svg>
              <span className="ml-1">Pay</span>
            </PaymentMethodOption>
            <PaymentMethodOption 
              selected={selectedPayment === "apple"} 
              onClick={() => setSelectedPayment("apple")}
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9008 10.7018C13.8568 8.70566 15.4818 7.60957 15.56 7.5654C14.5261 6.05138 12.9343 5.8283 12.3553 5.80748C10.9963 5.6635 9.68359 6.64364 9.0002 6.64364C8.29584 6.64364 7.22056 5.82934 6.10315 5.8584C4.66651 5.88747 3.33073 6.72463 2.58948 8.00334C1.0423 10.6093 2.22066 14.4221 3.70607 16.3765C4.46627 17.3254 5.35456 18.4008 6.50334 18.351C7.62803 18.2951 8.07046 17.6144 9.43252 17.6144C10.7777 17.6144 11.1889 18.351 12.3605 18.3249C13.5703 18.3044 14.3305 17.3605 15.0595 16.3984C15.9477 15.2773 16.3081 14.1812 16.3289 14.1148C16.2849 14.0971 13.9488 13.12 13.9008 10.7018Z" fill={selectedPayment === "apple" ? "white" : "black"} />
                <path d="M11.3641 3.59871C11.9849 2.82828 12.4013 1.77359 12.2773 0.703125C11.3902 0.740293 10.2831 1.31938 9.63325 2.06898C9.06048 2.72624 8.55609 3.82041 8.70115 4.84508C9.69151 4.9197 10.7171 4.35021 11.3641 3.59871Z" fill={selectedPayment === "apple" ? "white" : "black"} />
              </svg>
              <span className="ml-1">Pay</span>
            </PaymentMethodOption>
            <PaymentMethodOption 
              selected={selectedPayment === "gpay"} 
              onClick={() => setSelectedPayment("gpay")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill={selectedPayment === "gpay" ? "white" : "#F3F3F3"} />
                <path d="M12.71 11.42C12.71 10.86 12.25 10.62 11.77 10.37C11.46 10.2 11.14 10.03 11.14 9.72C11.14 9.44 11.41 9.23 11.75 9.23C12.08 9.23 12.31 9.34 12.47 9.48L12.73 9.11C12.5 8.9 12.17 8.76 11.77 8.76C11.16 8.76 10.63 9.18 10.63 9.76C10.63 10.29 11.07 10.55 11.54 10.79C11.87 10.97 12.19 11.14 12.19 11.48C12.19 11.81 11.89 12.01 11.52 12.01C11.09 12.01 10.83 11.83 10.65 11.63L10.37 11.99C10.63 12.3 11.05 12.49 11.52 12.49C12.22 12.49 12.71 12.06 12.71 11.42" fill={selectedPayment === "gpay" ? "black" : "#757575"} />
                <path d="M13.37 12.41H13.88V9.36H15.04V8.85H12.21V9.36H13.37V12.41Z" fill={selectedPayment === "gpay" ? "black" : "#757575"} />
                <path d="M9.53 12.41H10.04V8.85H9.53V12.41Z" fill={selectedPayment === "gpay" ? "black" : "#757575"} />
                <path d="M7.32 12.41H7.83V10.15L9.12 12.41H9.63V8.85H9.12V11.08L7.85 8.85H7.32V12.41Z" fill={selectedPayment === "gpay" ? "black" : "#757575"} />
                <path d="M16.03 12.41C16.65 12.41 17.15 11.91 17.15 11.28V10C17.15 9.37 16.65 8.87 16.03 8.87C15.41 8.87 14.91 9.37 14.91 10V11.28C14.91 11.91 15.41 12.41 16.03 12.41ZM15.42 9.97C15.42 9.65 15.68 9.38 16.03 9.38C16.38 9.38 16.64 9.65 16.64 9.97V11.31C16.64 11.62 16.38 11.9 16.03 11.9C15.68 11.9 15.42 11.62 15.42 11.31V9.97Z" fill={selectedPayment === "gpay" ? "black" : "#757575"} />
              </svg>
            </PaymentMethodOption>
          </div>
        </div>
      </div>

      {/* Order summary */}
      <div className="w-96 bg-white p-8 shadow-lg">
        <div className="mb-6">
          <PaymentCard 
            cardNumber="5478" 
            expiryDate="07 / 27" 
            cardholderName="Mr. Fredrik Ivarsson" 
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">Manage Cards</span>
            <ChevronRight size={16} className="text-gray-600" />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="text-3xl font-bold mb-6">{itemCount} items</div>
          
          <div className="space-y-3 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>€ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span>- € {discount.toFixed(2)} ({discountPercentage}%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Service</span>
              <span>+ € {deliveryFee.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">€ {total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-lg font-medium transition-colors">
            Pay <ChevronRight size={16} className="inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;