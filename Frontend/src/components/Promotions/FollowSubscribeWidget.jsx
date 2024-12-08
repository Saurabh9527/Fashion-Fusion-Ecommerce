
import React from 'react'
import useFetchProducts from '../../hooks/useFetchProducts';
import FollowSubscribeWidgetProduct from './FollowSubscribeWidgetProduct';

const FollowSubscribeWidget = () => {
    const { products, loading, error } = useFetchProducts(1, 6, 'Watches');

  return (
    <div className='mt-12'>
      <h2 className=' sm:max-w-[80%] text-center mx-auto text-base sm:text-lg md:text-xl lg:text-3xl font-medium font-roboto '>Follow Products And Discount On Instagram</h2>
      <FollowSubscribeWidgetProduct product={products}/>
    </div>
  )
}

export default FollowSubscribeWidget
