import ProductsFilter from "../components/product/ProductsFilter";
import ProductDetailCard from "../components/ProductDetailCard";
import RecentFinds from "../components/product/RecentFinds";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchProducts, selectProducts, selectTotalProducts, selectIsLoading } from "../redux/slices/productsSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
    const dispatch =  useDispatch<AppDispatch>();
    const products = useSelector(selectProducts);
    const totalProducts = useSelector(selectTotalProducts);
    const loading = useSelector(selectIsLoading);
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get('category-name');
    const [minPrice, setMinPrice] = useState<number | undefined>();
    const [maxPrice, setMaxPrice] = useState<number | undefined>();
    const [sizeFilter, setSizeFilter] = useState<string | undefined>();
    const [ratingsFilter, setRatingsFilter] = useState<number | undefined>();
    const [colorFilter, setColorFilter] = useState<string | undefined>();

    console.log("Category name: ", categoryName);
    useEffect(() => {
        if (categoryName) {
            dispatch(fetchProducts({ category: categoryName.toLowerCase() }) as any);
            return;
        }
        dispatch(fetchProducts as any);
    }, [dispatch, categoryName]);

    const handleColorChange = (color: string) => {
        setColorFilter(color);
    }

    const handleSizeChange = (size: string) => {
        setSizeFilter(size);
    }

    const handlePriceChange = (priceRange: { min?: number; max?: number }) => {
        setMinPrice(priceRange.min);
        setMaxPrice(priceRange.max);
    }

    return (
        <div className="">
            <h2 className="text-5xl text-center font-semibold my-6">Products Page</h2>
            <div className="max-w-5/6 grid grid-cols-1 lg:grid-cols-4 mx-auto p-6">
                <div className="hidden xl:block">
                    <ProductsFilter 
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        sizeFilter={sizeFilter}
                        onSizeChange={handleSizeChange}
                        ratingsFilter={ratingsFilter}
                        setRatingsFilter={setRatingsFilter}
                        colorFilter={colorFilter}
                        onColorChange={handleColorChange}
                        onPriceRangeChange={handlePriceChange}
                    />
                </div>
                
                <div className="lg:grid lg:col-span-3 px-6">
                    { loading ? (
                        <p className="text-center text-gray-500 mt-20">Loading products...</p>
                    ) : products.length < 1 ? (
                        <p className="text-center text-gray-500 mt-20">No products found.</p>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                            {products.map((product, i) => (
                                <ProductDetailCard product={product} key={i} />
                            ))}
                        </div>
                    )}

                    {/* Recent Finds Component */}
                    <RecentFinds />
                </div>
                
            </div>
        </div>
        
    )
}

export default Products;