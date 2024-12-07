
import React from 'react'
import FollowSubscribeWidget from './FollowSubscribeWidget'
import SubscribeNewsletter from './SubscribeNewsletter'

const Promotions = () => {
  return (
    <div className='mt-16'>
    <div className='w-full h-[330px] bg-slate-100'>
    {/* flex flex-col max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[700px] mx-auto */}
    <div className='flex flex-col xl:max-w-[900px] mx-auto'>
    < FollowSubscribeWidget />
    < SubscribeNewsletter />
    </div>
    </div>
    </div>
  )
}

export default Promotions
