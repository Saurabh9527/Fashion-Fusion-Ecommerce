
import React, { useState } from 'react'
import ProductDescription from './ProductDescription';
import ProductOffers from './ProductOffers/ProductOffers';
import useSimillarProducts from '../../hooks/useSimillarProducts';
import SimilarProducts from './SimilarProducts';

const ProductDisplay = ({ product }) => {

   const {products, loading, error} =useSimillarProducts(product.category)

  const [index, setIndex] = useState(0);

  const handleImageClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  }

 // @above the 768 all it's good 
 //below the 768 till 640 only details take below
 //below the  640 everything flex-col one by one below

  return (
    <div className='flex flex-col ml-2 mr-2 sm:ml-5 sm:mr-5 lg:max-w-[1000px] xl:max-w-[1200px] lg:mx-auto pt-8 mb-10'>
      <div><p>Home/</p></div>
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
      <div className='mt-20'>
        <h3 className='mb-3 font-semibold font-sans'>SIMILAR PRODUCTS</h3>
        <SimilarProducts products={products}/>
      </div>
    </div>
  )
}

export default ProductDisplay
