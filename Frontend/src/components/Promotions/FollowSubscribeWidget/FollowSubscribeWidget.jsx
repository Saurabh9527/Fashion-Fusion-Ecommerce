
import React from 'react'
import FollowSubscribeWidgetProduct from '../FollowSubscribeWidgetProduct';
import useFetchProducts from '../../../hooks/useFetchProducts';
import FollowSubscribeWidgetShimmerUI from '../../../ShimmerUI/FollowSubscribeWidget/FollowSubscribeWidgetShimmerUI'

const FollowSubscribeWidget = () => {
  const { products, loading, error } = useFetchProducts(1, 6, 'Watches');

  return (
    <div className='mt-12'>
      <h2 className=' sm:max-w-[80%] text-center mx-auto text-base sm:text-lg md:text-xl lg:text-3xl font-medium font-roboto '>Follow Products And Disc ount On Instagram</h2>
      {
        loading
          ?
          (
            <FollowSubscribeWidgetShimmerUI />
          )
          : (<FollowSubscribeWidgetProduct product={products} />)
      }
    </div>
  )
}

export default FollowSubscribeWidget
