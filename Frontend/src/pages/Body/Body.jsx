
import React from 'react'
import BrandBannerCarousel from '../../components/Carousel/BrandBannerCarousel'
import BrandList from '../../components/BrandList/BrandList'
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase'
import OffersCarousel from '../../components/Carousel/OffersCarousel'

const Body = () => {
  return (
    <div className='pt-1 '>
      <BrandBannerCarousel />
      <BrandList />
      <ProductShowcase />
      <OffersCarousel />
    </div>
  )
}

export default Body
