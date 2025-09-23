import { StarIcon, TruckIcon, RefreshCwIcon, LeafIcon } from 'lucide-react'
import React from 'react'

const Promotions = () => {
  return (
    <div className='mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 my-8 max-w-6xl'>
      <div className='flex flex-col justify-center text-center align-items-center p-4 rounded-lg'>
        <div className='bg-gray-50 rounded-full p-4 mx-auto'>
          <StarIcon className='text-yellow-500' />
        </div>
        <h3 className='font-medium'>4.8/5 Rating</h3>
        <p className='text-sm text-gray-500'>Based on 2,340+ reviews</p>
      </div>
      <div className='flex flex-col justify-center text-center align-items-center p-4 rounded-lg'>
        <div className='bg-gray-50 rounded-full p-4 mx-auto'>
          <TruckIcon className='text-blue-500' />
        </div>
        <h3 className='font-medium'>Free Shipping</h3>
        <p className='text-sm text-gray-500'>On orders over $75</p>
      </div>
      <div className='flex flex-col justify-center text-center align-items-center p-4 rounded-lg'>
        <div className='bg-gray-50 rounded-full p-4 mx-auto'>
          <RefreshCwIcon className='text-orange-500' />
        </div>
        <h3 className='font-medium'>30-Day Returns</h3>
        <p className='text-sm text-gray-500'>Hassle-free exchanges within 30 days</p>
      </div>
      <div className='flex flex-col justify-center text-center align-items-center p-4 rounded-lg'>
        <div className='bg-gray-50 rounded-full p-4 mx-auto'>
          <LeafIcon className='text-green-500' />
        </div>
        <h3 className='font-medium'>Sustainable</h3>
        <p className='text-sm text-gray-500'>Eco-friendly materials</p>
      </div>
    </div>
  )
}

export default Promotions
