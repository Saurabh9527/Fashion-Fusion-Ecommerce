import React from 'react'
import './CartShimmerUI.css'


const ShimmerBlock = () => {
  return (
    <div className='flex w-full gap-x-4 p-2'>
      <div className='border h-[200px] w-[200px] bg-gray-300 rounded-md shimmer'></div>
      <div className='flex flex-col gap-y-6 w-full'>
        <div className='h-4 w-[70%] bg-gray-300 rounded-sm shimmer'></div>
        <div className='h-4 w-[10%] bg-gray-300 rounded-sm shimmer'></div>
        <div className='h-4 w-[35%] bg-gray-300 rounded-sm shimmer'></div>
        <div className='h-4 w-[70%] bg-gray-300 rounded-sm shimmer'></div>
      </div>
    </div>
  );
};

const CartShimmerUI = () => {
  const shimmerBlocks = [1, 2];

  return (
    <div>
      {shimmerBlocks.map((_, index) => (
        <ShimmerBlock key={index} />
      ))}
    </div>
  );
}

export default CartShimmerUI