
import React from 'react'
import useFetchProducts from '../../hooks/useFetchProducts';
import FollowSubscribeWidgetProduct from './FollowSubscribeWidgetProduct';

const FollowSubscribeWidget = () => {
    const { products, loading, error } = useFetchProducts(1, 6, 'Watches');

  return (
    <div className='mt-12'>
      <h2 className='max-w-[80%] mx-auto text-2xl font-medium font-roboto text-center'>Follow Products And Discount On Instagram</h2>
      <div className='flex space-x-2 mt-10'>
        {
            products.map((product) => (
                <FollowSubscribeWidgetProduct key={product._id} product={product}/>
            ))
        }
      </div>
    </div>
  )
}

export default FollowSubscribeWidget
