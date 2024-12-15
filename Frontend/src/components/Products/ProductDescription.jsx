
import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const ProductDescription = ({ product }) => {
  return (
    <div className='flex flex-col p-1 pl-3 pt-2'>
      <h2 className='font-roboto font-medium text-sm sm:text-base md:text-xl'>{product.title}</h2>
      <p className='text-customGray text-xs sm:text-sm md:text-lg pt-2'>{product.description}</p>
      <div className='flex items-center pt-2 mt-1'>
        <h3 className='text-sm sm:text-base font-medium mr-1 '>{product.rating}</h3>
        <MdOutlineStar className='text-sm text-green-800' />
        <span className='text-customGray text-xs sm:text-base ml-2'>|</span>
        <h3 className='ml-2 text-sky-900 font-medium text-xs sm:text-base'>{product.stock}, Ratings</h3>
      </div>
      <div className='pt-2 mt-1 flex items-start justify-start gap-x-3 flex-col custom2:flex-row'>
        <span className=' font-semibold sm:font-bold text-sm sm:text-lg'>₹{product.price}</span>
        <div className=' mt-2 custom2:mt-0 space-x-2'>
        <span
          className='text-customGray text-sm sm:text-lg line-through'>
          MRP ₹{(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
        <span className='text-orange-400 font-semibold sm:font-bold text-sm sm:text-lg'>({product.discountPercentage}%OFF)</span>
        </div>
      </div>
      <p className='text-green-900 font-medium font-roboto pt-2 mt-1'>inclusive of all taxes</p>
      <div className='flex flex-col items-center pt-2 mt-4 gap-4 mb-8 custom:flex-row'>
        <button className='border px-12 py-3 rounded-md text-center text-base font-medium font-roboto bg-rose-500 hover:bg-red-600 text-white w-full'>ADD TO BAG</button>
        <button
          className='border px-12 py-3 rounded-md text-center text-base font-medium font-sans flex items-center justify-center gap-1 hover:border-gray-400 w-full'>
          <CiHeart className='size-5' />
          <span className='inline-flex items-center'>WISHLIST</span>
        </button>
      </div>
    </div>
  )
}

export default ProductDescription

