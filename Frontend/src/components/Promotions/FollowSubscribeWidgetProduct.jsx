
import React from 'react'
import { Link } from 'react-router-dom';

const FollowSubscribeWidgetProduct = ( {product} ) => {
  return (
    <Link to={`/product/${product._id}`}>
    <div className=' shadow-lg  '>
      <img 
      src={product.thumbnail} 
      alt={product.title} />
    </div>
    </Link>
  )
}

export default FollowSubscribeWidgetProduct
