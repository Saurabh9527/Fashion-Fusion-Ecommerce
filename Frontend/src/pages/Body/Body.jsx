
import React from 'react'
import BrandBannerCarousel from '../../components/Carousel/BrandBannerCarousel'
import BrandList from '../../components/BrandList/BrandList'
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase'
import OffersCarousel from '../../components/Carousel/OffersCarousel'
import Products from '../../components/Products/Products'

const Body = () => {
  return (
    <div className='pt-1 '>
      <BrandBannerCarousel />
      <BrandList />
      <ProductShowcase />
      <OffersCarousel />
      <Products />
    </div>
  )
}

export default Body
