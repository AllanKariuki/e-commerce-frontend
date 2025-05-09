import { Trash2, Plus, Minus } from 'lucide-react';


const CartItem = ({ item, updateQuantity }) => {
    return (
        <div className="flex items-center border-b pb-4">
          {/* Checkbox */}
          <div className="mr-2">
            <input type="checkbox" />
          </div>
          
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
            <h3 className="font-medium">{item.name}</h3>
            <div className="text-sm text-gray-500">
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
            </div>
            <p className="font-medium mt-1">${item.price}</p>
          </div>
          
          {/* Quantity controls */}
          <div className="flex items-center">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border rounded-l"
            >
              <Minus size={16} />
            </button>
            <div className="w-8 h-8 flex items-center justify-center border-t border-b">
              {item.quantity}
            </div>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border rounded-r"
            >
              <Plus size={16} />
            </button>
          </div>
          
          {/* Delete button */}
          <button className="ml-4 text-red-500">
            <Trash2 size={16} />
          </button>
        </div>
      );
}

export default CartItem;