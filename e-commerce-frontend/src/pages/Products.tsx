import ProductsFilter from "../components/product/ProductsFilter";
import ProductDetailCard from "../components/ProductDetailCard";
import RecentFinds from "../components/product/RecentFinds";

const Products = () => {
    return (
        <div className="">
            <h2 className="text-5xl text-center font-semibold my-6">Products Page</h2>
            <div className="max-w-5/6 grid grid-cols-1 lg:grid-cols-4 mx-auto p-6">
                <div className="hidden xl:block">
                    <ProductsFilter />
                </div>
                
                <div className="lg:grid lg:col-span-3 px-6">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                        {[...Array(10)].map((_, i) => (
                            <ProductDetailCard key={i} />
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