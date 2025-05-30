import { Heart, ShoppingCart, ChevronLeft, Star, ChevronRight } from 'lucide-react';


const RelatedProductsCarousel = () => {
    const products = [
        {
          id: 1,
          name: 'Reebok Classic Leather',
          price: 149.15,
          image: '/api/placeholder/200/200',
          color: 'Black'
        },
        {
          id: 2,
          name: 'Reebok Club C 85',
          price: 129.99,
          image: '/api/placeholder/200/200',
          color: 'White'
        },
        {
          id: 3,
          name: 'Reebok Nano X3',
          price: 179.50,
          image: '/api/placeholder/200/200',
          color: 'Red'
        },
        {
          id: 4,
          name: 'Reebok Floatride Energy 5',
          price: 159.00,
          image: '/api/placeholder/200/200',
          color: 'Blue'
        }
      ];
    
      return (
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-6">You may also like</h2>
          <div className="flex items-center space-x-2 justify-end mb-6">
            <button className="w-8 h-8 bg-gray-100 bg-opacity-70 rounded-full flex items-center justify-center">
              <ChevronLeft size={16} className="text-gray-400" />
            </button>
            <button className="w-8 h-8 bg-gray-100 bg-opacity-70 rounded-full flex items-center justify-center">
              <ChevronRight size={16} />
            </button>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex text-center">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 p-4">
                <div className="mb-2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-square object-contain" 
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                <div className="text-sm font-bold">${product.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-6">
            <h3 className="text-xl font-medium">Popular brands with discounts over 25%</h3>
          </div>
        </div>
      );
}

export default RelatedProductsCarousel;