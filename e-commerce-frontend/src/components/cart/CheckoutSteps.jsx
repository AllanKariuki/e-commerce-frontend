import { Trash2, ShoppingCart, Check, ChevronRight, Plus, Minus } from 'lucide-react';

const CheckoutSteps = ({ currentStep }) => {
    const steps = [
        { number: 1, label: 'Shopping cart', icon: <ShoppingCart size={16} /> },
        { number: 2, label: 'Checkout details', icon: <Check size={16} /> },
        { number: 3, label: 'Order complete', icon: <Check size={16} /> }
      ];
      
    return (
    <div className="flex justify-center">
        <div className="flex items-center w-full max-w-2xl">
        {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
            {/* Step circle with number */}
            <div className={`
                flex items-center justify-center w-8 h-8 rounded-full
                ${currentStep >= step.number ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'}
            `}>
                {step.number}
            </div>
            
            {/* Step label */}
            <span className={`ml-2 text-sm ${currentStep === step.number ? 'font-medium' : ''}`}>
                {step.label}
            </span>
            
            {/* Connector line between steps */}
            {index < steps.length - 1 && (
                <div className="flex-grow mx-4 h-px bg-gray-300" />
            )}
            </div>
        ))}
        </div>
    </div>
    );
}

export default CheckoutSteps;