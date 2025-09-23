const DeliveryMethodOption = ({ icon, label, selected, onClick }) => {
    return (
        <div 
        className={`${selected ? 'bg-black text-white' : 'bg-white text-black border border-gray-300'} rounded-lg p-3 flex items-center justify-center cursor-pointer`}
        onClick={onClick}
        >
        <div className="mr-2">{icon}</div>
        <span className="text-sm">{label}</span>
        </div>
    );
}

export default DeliveryMethodOption;