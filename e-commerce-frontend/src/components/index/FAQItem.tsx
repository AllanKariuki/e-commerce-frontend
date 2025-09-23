import { Minus, Plus } from 'lucide-react'
import React from 'react'

const FAQItem =({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm">
    <button
      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <span className="font-semibold text-lg">{question}</span>
      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
    </button>
    {isOpen && (
      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
)

export default FAQItem
