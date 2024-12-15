
import React from 'react'
import { deliverOptions, offers } from '../../../utils/offers.js'
import './ProductOffers.css'
import { BiSolidOffer } from "react-icons/bi";

const ProductOffers = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center mb-3'>
      <BiSolidOffer className='size-6 text-gray-700'/>
        <span className='font-roboto font-medium ml-2'>Offers</span>
      </div>
      <div className='flex items-center space-x-2 sm:space-x-4 overflow-x-auto sm:overflow-visible'>
            {offers.map((offer) =>(
                <div 
                key={offer.id} 
                className='border-2 rounded-md shadow-md w-[150px] flex-shrink-0'>
                    <div className='p-2 font-sans font-normal text-gray-950'>
                    {offer.description}
                    </div>
                </div>
            ))}
      </div>
      <hr className=' mt-10 h-[2px] bg-gray-50'/>
      <div className='mt-10'>
        <div className='flex items-center space-x-2 sm:space-x-4 overflow-x-auto sm:overflow-visible'>
            {deliverOptions.map((option) => (
                <div key={option.id} className='w-[150px] flex-shrink-0'>
                <img 
                src={option.image} 
                alt="delivery-options" 
                className='h-[35px] w-[35px]'/>
                <div className='text-sky-700 font-sans text-sm'>{option.description}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductOffers
