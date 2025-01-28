
import React from 'react'
import './BodyShimmerUI.css'

const BodyShimmerUI = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-56 md:h-96 w-full bg-gray-300'></div>
        <div className='flex  justify-center mt-[60px] gap-3 sm:gap-5 lg:gap-8 w-full'>
            <div className='w-32 h-16  bg-gray-300 rounded-lg'></div>
            <div className='w-32 h-16  bg-gray-300 rounded-lg'></div>
            <div className='w-32 h-16  bg-gray-300 rounded-lg'></div>
            <div className='w-32 h-16  bg-gray-300 rounded-lg'></div>
            <div className='w-32 h-16  bg-gray-300 rounded-lg'></div>
        </div>
        {/* <div className='flex flex-col lg:flex-row mt-[60px] max-w-[900px] xl:max-w-[1000px] mx-auto gap-8'>
            <div className='w-32 bg-gray-500'></div>
            <div className='flex flex-col gap-8'>
            <div className='flex gap-8'>
                <div className='h-32 w-32 bg-gray-500'></div>
                <div className='h-32 w-32 bg-gray-500'></div>
            </div>
            <div className='flex gap-8'>
                <div className='h-32 w-32 bg-gray-500'></div>
                <div className='h-32 w-32 bg-gray-500'></div>
            </div>
            </div>
        </div>
        <div>

        </div> */}
    </div>
  )
}

export default BodyShimmerUI