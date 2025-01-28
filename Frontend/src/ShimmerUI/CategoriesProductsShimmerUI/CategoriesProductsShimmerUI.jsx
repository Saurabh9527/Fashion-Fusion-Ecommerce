
import React from 'react'
import '../ProductsShimmerUI/ProductsShimmerUI'

const CategoriesProductsShimmerUI = () => {
    const shimmerCards = Array.from({ length: 12 });

  return (
    <div className='mt-[60px] mx-auto max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6'>
        {shimmerCards.map((_, index) => (
          <div
            key={index}
            className='min-h-[350px] sm:min-w-[220px] bg-gray-300 shimmer rounded-md'
          ></div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesProductsShimmerUI