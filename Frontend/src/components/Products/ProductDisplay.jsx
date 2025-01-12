
import React, { useEffect, useState } from 'react'
import ProductDescription from './ProductDescription';
import ProductOffers from './ProductOffers/ProductOffers';
import useSimillarProducts from '../../hooks/useSimillarProducts';
import SimilarProducts from './SimilarProducts';
import { Link, useNavigate } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ProductDisplay = ({ product }) => {

  const {products, loading, error} =useSimillarProducts(product.category)
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  }

  const handleHomeNavigation = () => {
      navigate('/home')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className='flex flex-col ml-2 mr-2 sm:ml-5 sm:mr-5 lg:max-w-[1000px] xl:max-w-[1200px] lg:mx-auto pt-8 mb-10'>
      <div>
        <p 
        className='text-customGray text-sm pl-2 cursor-pointer'
        onClick={handleHomeNavigation}>Home</p>
      </div>
      <div className='flex flex-wrap sm:flex-nowrap mt-5 sm:space-x-4'>    
          <div className='flex flex-col'>
            {product.images.map((img, index) => (
              <div 
              key={index}
              className='border-2 size-16 border-transparent rounded-lg hover:border-teal-800 hover:rounded-lg transition-all duration-300 ease-in-out p-1'
              >
              <img
                src={img}
                alt={product.title}
                className='border border-gray-400 rounded-lg cursor-pointer p-1'
                onClick={handleImageClick} />
                </div>
            ))}
          </div>
          <div className='mx-auto sm:mx-0 pb-2'>
          <img
            src={product.images[index]}
            alt={product.title}
            className='object-cover rounded-md max-h-[250px] max-w-[250px] sm:max-h-[280px] sm:max-w-[280px] md:max-h-[350px] md:max-w-[350px] lg:max-h-[410px] lg:max-w-[410px]'
          />
          </div>
        <div className=''>
          <ProductDescription product={product} />
        </div>
      </div>
      <hr className='h-[2px] bg-gray-50'/>
      <div className='mt-10 sm:ml-auto'>
        <ProductOffers />
      </div>
      <hr className='mt-5'/>
      <div className='mt-10 flex justify-end'>
        <div className='w-1/2'>
        <div className='flex flex-col'>
        <h3 className='text-xl font-semibold mb-3 '>Review this product</h3>
        <h4 className='text-gray-900 mb-4'>Share your thoughts with other customers</h4>
        <div className='border border-gray-400 hover:bg-gray-50 w-fit py-2 text-center rounded-full mb-10'>
        <Link
        className='px-6' 
        to={`/create-review/${product?._id}`}
        >Write a product review
        </Link>
        </div>
        </div>
        <Reviews />
      </div>
      </div>
      <div className='mt-20'>
        <h3 className='mb-3 font-semibold font-sans'>SIMILAR PRODUCTS</h3>
        <SimilarProducts products={products}/>
      </div>
    </div>
  )
}

export default ProductDisplay
