
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import './ProductItem.css'

const ProductItem = ({ product }) => {
 //console.log(product.images);
  //TODO: create carousel for images 
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Link to={`/product/${product._id}`}>
      <div className="max-w-sm bg-white border border-gray-50 rounded-md shadow-md ">

      <div className="relative w-full h-[200px] sm:h-[250px]">
          {/* Shimmer Effect */}
         {!imageLoaded && (
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          )}

          {/* Actual Image */}
          <img
            className={`rounded-t-lg w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={product.thumbnail}
            alt={product.title}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="p-2 mb-4">
          <div>
            <h3 className='mb-2 text-base font-semibold'>{product.brand || product.category}</h3>
          </div>
          <div className=''>
            <h4 className="mb-2 text-sm font-sans text-customGray tracking-tight truncate ">{product.title}</h4>
          </div>
          <div className='flex justify-between items-baseline'>
            <span className='text-base font-semibold font-sans'>
            Rs. {product.price.toString().length > 6 ? Math.round(product.price) : product.price}
            </span>
            <span className='text-xs text-customGray line-through'>
              Rs. {(
                product.price / (1 - product.discountPercentage / 100)
              ).toFixed(2)}
            </span>
            </div>
            <div className='flex items-center justify-between mt-3 '>
              <div className='flex items-center'>
              <span className='font-medium text-sm font-roboto'>{product.rating}</span>
              <IoMdStar className='text-green-600 size-[15px] ml-1'/>
              </div>
              <span className='text-rose-300 text-sm font-medium'>({product.discountPercentage}% off)</span>
            </div>  
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
