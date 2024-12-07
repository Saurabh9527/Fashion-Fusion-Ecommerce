
import React from 'react'
import { Link } from 'react-router-dom';

const ProductCarouselProduct = ( {product} ) => {
  return (
    <Link to={`/product/${product._id}`}>
    <div className='flex flex-col min-w-[150px] md:min-w-[200px]'>
      <img 
      src={product.thumbnail} 
      alt={product.title}
      className='rounded-md h-[200px] md:h-[280px] object-cover' 
      />
      <h4 className="mb-2 mt-3 text-sm font-medium tracking-tight truncate ">{product.title}</h4>
      <div className='flex  justify-between'>
      <h3 className='mb-2 text-sm font-sans text-customGray'>{product.brand || product.category}</h3>
      <span className='text-sm font-semibold font-sans'>
            Rs. {product.price.toString().length > 6 ? Math.round(product.price) : product.price}
            </span>
      </div>     
   </div>
   </Link>
  )
}

export default ProductCarouselProduct
