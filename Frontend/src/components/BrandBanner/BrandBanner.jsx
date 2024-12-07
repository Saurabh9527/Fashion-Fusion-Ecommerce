
import React from 'react'
import banner from '../../assets/brand-banner.png'
const BrandBanner = () => {
  return (
    <div>
        <img 
        src={banner} 
        alt="brand-banner" 
        className='w-full h-full object-cover'/>
    </div>
  )
}

export default BrandBanner
