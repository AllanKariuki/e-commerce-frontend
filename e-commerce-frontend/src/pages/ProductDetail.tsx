import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { Heart, ShoppingCart, ChevronDown, Star, ChevronDownCircle, ChevronRightCircle, ChevronLeftCircle } from 'lucide-react';
import ProductImages from "../components/product-details/ProductImages";
import ProductDetails from '../components/product-details/ProductDetails';
import ProductTabs from '../components/product-details/ProductTabs';
import RelatedProductsCarousel from '../components/product-details/RelatedProductsCarousel';
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, selectedProduct, selectIsLoading } from "../redux/slices/productsSlice";
import type { AppDispatch } from "../redux/store";

const ProductDetail = () => {
    const { id } = useParams<string>();
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector(selectedProduct);
    const loading = useSelector(selectIsLoading);
    const productImages = product?.product_images || [];

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(parseInt(id)));
        }
    }, [id, dispatch]);
    if (loading || !product) {
        return <div className="text-center py-20 text-lg">Loading product details...</div>;
    }
    
    return (
        <div className="max-w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="py-4">

                <div className="text-sm text-gray-500 mb-2">
                    <nav className="flex">
                        <span>Clothes and shoes</span>
                        <span className="mx-2">.</span>
                        <span>Shoes</span>
                        <span className="mx-2">.</span>
                        <span>Reebok</span>
                    </nav>
                </div>
                    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
                    <ProductImages productImages={productImages} />
                    <ProductDetails product={product} />
                </div>

                <ProductTabs product={product} />

                <RelatedProductsCarousel />

            </div>
        </div>
    )

}

export default ProductDetail;