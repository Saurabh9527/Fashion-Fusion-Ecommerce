
import React from 'react'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'

const BrandList = () => {
  return (
    <div className='flex items-center justify-center mt-[60px] gap-3 sm:gap-5 lg:gap-8 w-full'>
            <img src={brand1} alt="brand1" className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-auto' />
            <img src={brand2} alt="brand2" className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-auto' />
            <img src={brand3} alt="brand3" className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-auto' />
            <img src={brand4} alt="brand4" className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-auto'/>
            <img src={brand5} alt="brand5" className='w-16 sm:w-20 md:w-24 lg:w-28 xl:w-auto'/>
    </div>
  )
}

export default BrandList
