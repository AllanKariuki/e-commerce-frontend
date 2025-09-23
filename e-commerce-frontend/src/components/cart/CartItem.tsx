import { Trash2, Plus, Minus } from 'lucide-react';


const CartItem = ({ 
  item, 
  updateQuantity, 
  removeItem 
}) => {
    return (
        <div className="flex items-center border-b-1 border-gray-200 pb-4">
          
          
          {/* Product image */}
          <div className="w-16 h-16 mr-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Product info */}
          <div className="flex-grow">
            <div className='flex justify-between items-center'>
                <h3 className="font-medium">{item.name}</h3>                
            </div>
            
            <div className="text-sm text-gray-500">
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
            </div>
            <p className="font-medium mt-1">${item.price}</p>
          </div>

            <div className='flex flex-col items-end h-full'>
                <button 
                  className="ml-4 text-red-500 top-2 flex justify-end"
                  onClick={() => removeItem(item.id)}
                  >
                  <Trash2 size={16} />
                </button>
                <div></div>
                {/* Quantity controls */}
                <div className="flex items-center rounded-2xl px-1 bg-gray-100">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center"
                  >
                  <Minus size={16} />
                </button>
                <div className="w-8 h-8 flex items-center justify-center">
                  {item.quantity}
                </div>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
                </div>
            </div>          
          
        </div>
      );
}

export default CartItem;