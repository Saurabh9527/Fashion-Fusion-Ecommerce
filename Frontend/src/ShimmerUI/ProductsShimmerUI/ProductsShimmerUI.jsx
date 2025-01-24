
import React from 'react'
import '../CartShimmerUI/CartShimmerUI.css'

const ProductsShimmerUI = () => {

    const shimmerCards = Array.from({ length: 12 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
      {shimmerCards.map((_, index) => (
        <div
          key={index}
          className="shimmer shadow-sm rounded-md min-h-[340px]"
        ></div>
      ))}
    </div>
  )
}

export default ProductsShimmerUI