
const PaymentCard = ({ cardNumber, expiryDate, cardholderName }) => {
    return (
    <div className="bg-black text-white rounded-lg p-4 w-full h-36 relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 bottom-0 opacity-10">
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute top-12 -right-12 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full border border-white/20"></div>
      </div>
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-6 bg-white/20 rounded"></div>
        <div className="text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 12C16 12 18 15 21 12M3 12C6 15 8 12 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="text-xs text-gray-300 mb-1">Exp: {expiryDate}</div>
        <div className="flex">
          <span className="text-sm mr-1">••••</span>
          <span className="text-sm">{cardNumber.substring(cardNumber.length - 4)}</span>
        </div>
      </div>
      
      <div className="text-sm">{cardholderName}</div>
    </div>
  );
}

export default PaymentCard;