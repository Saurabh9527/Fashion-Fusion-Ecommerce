
import React from 'react'
import SubscribeNewsletter from './SubscribeNewsletter'
import FollowSubscribeWidget from './FollowSubscribeWidget/FollowSubscribeWidget'

const Promotions = () => {
  return (
    <div className='mt-16'>
    <div className='w-full h-[410px] lg:h-[450px] bg-slate-100'>
    {/* flex flex-col max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[700px] mx-auto */}
    <div className='flex flex-col max-w-[380px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mx-auto'>
    < FollowSubscribeWidget />
    < SubscribeNewsletter />
    </div>
    </div>
    </div>
  )
}

export default Promotions
