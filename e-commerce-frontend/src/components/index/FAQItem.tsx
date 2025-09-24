import { Plus } from 'lucide-react'
import React from 'react'

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, answer, isOpen, onClick 
}) => (
  <div className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md">
    <button
      className="w-full px-8 py-6 text-left flex justify-between 
      items-center hover:bg-gray-50 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <span className="font-semibold text-lg transition-colors duration-200">{question}</span>
      <div className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <Plus className="w-5 h-5" />
      </div>
    </button>
    <div 
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100 transform translate-y-0' 
          : 'max-h-0 opacity-0 transform -translate-y-2'
      }`}
    >
      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
)

export default FAQItem
