
import React, { useState } from 'react'
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'
import '../Products/ProductItem/ProductItem.css'

const OrdersDisplay = ({ order }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      {order.products.map((product) => (
        <div
          key={product._id}
          className='p-2 pt-4 pb-4 flex justify-around'
        >
          <div className="relative max-w-[100%] h-[150px] custom5:h-[200px]">
            {/* Shimmer Effect */}
            {!imageLoaded && (
              <div className="shimmer-wrapper">
                <div className="shimmer"></div>
              </div>
            )}

            {/* Actual Image */}
            <img
              onClick={() => {
                navigate(`/product/${product?.productId?._id}`);
              }}
              className={`max-w-[100%] h-[150px] custom5:h-[200px] cursor-pointer rounded-lg transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              src={product?.productId?.thumbnail}
              alt={product?.productId?.title}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className='flex flex-col pl-4'>
            <div
              onClick={() => { navigate(`/product/${product?.productId?._id}`) }}
              className=' text-sky-600 hover:underline cursor-pointer'>
              {product?.productId?.title}
            </div>
            <div className='flex flex-col custom6:flex-row gap-3 mt-6'>
              <button
                onClick={() => { navigate(`/product/${product?.productId?._id}`) }}
                className='flex border items-center p-2 px-3 w-fit rounded-full bg-yellow-400 hover:bg-yellow-500'>
                <img
                  className=' size-5 custom5:size-7 mr-3'
                  src='https://m.media-amazon.com/images/S/sash/7uhR68oBHEcdiIr.png'
                  alt="return-icon" />
                Buy it again
              </button>
              <button
                onClick={() => { navigate(`/product/${product?.productId?._id}`) }}
                className='flex border items-center p-2 px-3 w-fit rounded-full hover:border-gray-400'>
                Product Details
              </button>
            </div>
          </div>
          <Link to={`/product/${product?.productId?._id}`}
            className='border border-gray-500 h-fit px-5 py-3 rounded-full hover:bg-gray-50'>
            Write Product Review
          </Link>
        </div>
      ))}

    </>
  )
}

export default OrdersDisplay