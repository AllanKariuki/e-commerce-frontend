import ProductsFilter from "../components/product/ProductsFilter";
import ProductDetailCard from "../components/ProductDetailCard";
import RecentFinds from "../components/product/RecentFinds";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchProducts, selectProducts, selectTotalProducts } from "../redux/slices/productsSlice";
import { useEffect } from "react";

const Products = () => {
    const dispatch =  useDispatch<AppDispatch>();
    const products = useSelector(selectProducts);
    const totalProducts = useSelector(selectTotalProducts);

    useEffect(() => {
        dispatch(fetchProducts as any);
    }, [dispatch]);

    return (
        <div className="">
            <h2 className="text-5xl text-center font-semibold my-6">Products Page</h2>
            <div className="max-w-5/6 grid grid-cols-1 lg:grid-cols-4 mx-auto p-6">
                <div className="hidden xl:block">
                    <ProductsFilter />
                </div>
                
                <div className="lg:grid lg:col-span-3 px-6">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                        {products.map((product, i) => (
                            <ProductDetailCard product={product} key={i} />
                        ))}
                    </div>

                    {/* Recent Finds Component */}
                    <RecentFinds />
                </div>
                
            </div>
        </div>
        
    )
}

export default Products;