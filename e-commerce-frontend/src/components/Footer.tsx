import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12 h-100">
      <div className="container mx-auto flex flex-col md:flex-row space-between gap-20 items-start">
        <div className="text-2xl xl:text-4xl font-bold text-gray-900">BR.<span className="text-gray-400">F</span></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 md:mt-0">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Shop</h3>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-gray-900">Women</a></li>
              <li><a href="#" className="hover:text-gray-900">Men</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Company</h3>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-gray-900">About us</a></li>
              <li><a href="#" className="hover:text-gray-900">Stores</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
            <ul className="text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-gray-900">Help</a></li>
              <li><a href="#" className="hover:text-gray-900">Delivery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contacts</h3>
            <p className="text-gray-600">+44 204 578-10-92</p>
            <div className="flex space-x-4 mt-2 text-gray-600">
              <FaTwitter className="hover:text-gray-900 cursor-pointer" />
              <FaInstagram className="hover:text-gray-900 cursor-pointer" />
              <FaFacebook className="hover:text-gray-900 cursor-pointer" />
              <FaYoutube className="hover:text-gray-900 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
