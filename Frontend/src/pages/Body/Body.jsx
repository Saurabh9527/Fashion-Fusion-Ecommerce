
import React from 'react'
import BrandBannerCarousel from '../../components/Carousel/BrandBannerCarousel'
import BrandList from '../../components/BrandList/BrandList'
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase'
import OffersCarousel from '../../components/Carousel/OffersCarousel'
import Products from '../../components/Products/Products'
import BrandBanner from '../../components/BrandBanner/BrandBanner'
import ProductCarousel from '../../components/Product-Carousel/ProductCarousel'
import Promotions from '../../components/Promotions/Promotions'

const Body = () => {
  return (
    <div className='pt-1'>
      <BrandBannerCarousel />
      <BrandList />
      <ProductShowcase />
      <OffersCarousel />
      <Products />
      <BrandBanner />
      <ProductCarousel />
      <Promotions />
    </div>
  )
}

export default Body
