import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, ChevronDown, Star, ChevronDownCircle, ChevronRightCircle, ChevronLeftCircle } from 'lucide-react';
import ProductImages from "../components/product-details/ProductImages";

const ProductDetail = () => {
    const { id } = useParams();
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="py-4">

            <div className="text-sm text-gray-500 mb-2">
                <nav className="flex">
                    <span>Clothes and shoes</span>
                    <span className="mx-2">/</span>
                    <span>Shoes</span>
                    <span className="mx-2">/</span>
                    <span>Reebok</span>
                </nav>
            </div>
                
                <div className="grid grid-cols-1 lg-cols-2 gap-8 mt-4">
                    <ProductImages />
                    <ProductDetails />
                </div>

                <ProductTabs /> 

                <RelatedProductsCarousel />

            </div>
        </div>
    )

}

export default ProductDetail;