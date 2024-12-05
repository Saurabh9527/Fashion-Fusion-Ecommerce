
import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
 // console.log(product);

  return (
    <Link to={`/product/${product._id}`}>
      <div className="max-w-sm bg-white border border-gray-50 rounded-md shadow-md ">
        <div>
          <img className="rounded-t-lg" src={product.thumbnail} alt="" />
        </div>
        <div className="p-2 mb-4">
          <div>
            <h3 className='mb-2 text-base font-semibold'>{product.brand}</h3>
          </div>
          <div className=''>
            <h4 className="mb-2 text-sm font-sans text-customGray tracking-tight truncate ">{product.title}</h4>
          </div>
          <div className='flex justify-between items-baseline'>
            <span className='text-base font-semibold font-sans'>Rs. {product.price}</span>
            <span className='text-xs text-customGray line-through'>
              Rs. {(
                product.price / (1 - product.discountPercentage / 100)
              ).toFixed(2)}
            </span>
            <span className='text-rose-300 text-sm font-medium'>({product.discountPercentage}% off)</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
