
import React, { lazy, Suspense } from 'react'
import ProfileDashboard from '../../../components/Profile/ProfileDashboard'

const ProductCarousel = lazy(() =>
  import('../../../components/Product-Carousel/ProductCarousel')
);

const Profile = () => {
  return (
    <div>
      <div className=' custom3:max-w-[480px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1000px] custom3:mx-auto ml-3 mr-3 mt-8'>
        <div className='flex flex-col'>
        <h2 className='text-3xl font-roboto font-medium'>Your Account</h2>
        <div className='mt-5'>
          <ProfileDashboard />
        </div>
        </div>
        <Suspense fallback={<div>Loading Carousel...</div>}>
          <ProductCarousel />
        </Suspense>
      </div>
    </div>
  )
}

export default Profile