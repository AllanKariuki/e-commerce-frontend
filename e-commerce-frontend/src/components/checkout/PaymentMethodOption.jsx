
const PaymentMethodOption = ({ children, selected, onClick }) => {
    return (
        <div 
        className={`border ${selected ? 'border-black bg-black text-white' : 'border-gray-300'} rounded-lg p-4 flex justify-center items-center cursor-pointer`}
        onClick={onClick}
        >
        {children}
        </div>
    );
}

export default PaymentMethodOption;