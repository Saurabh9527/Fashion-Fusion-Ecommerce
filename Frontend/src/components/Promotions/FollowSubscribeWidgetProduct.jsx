
import React from 'react'
import { Link } from 'react-router-dom';

const FollowSubscribeWidgetProduct = ({ product }) => {

  return (
    <div className="flex space-x-2 mt-10">
      {product.slice(0, 4).map((prod, index) => (
        <Link key={prod._id} to={`/product/${prod._id}`}>
          <div className="shadow-lg">
            <img src={prod.thumbnail} alt={prod.title} />
          </div>
        </Link>
      ))}

      {product.slice(4, 6).map((prod, index) => (
        <Link key={prod._id} to={`/product/${prod._id}`} className="hidden md:block">
          <div className="shadow-lg">
            <img src={prod.thumbnail} alt={prod.title} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FollowSubscribeWidgetProduct
