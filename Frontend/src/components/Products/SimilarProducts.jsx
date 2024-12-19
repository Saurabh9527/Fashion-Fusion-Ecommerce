
import React from 'react'
import ProductItem from './ProductItem'

const SimilarProducts = ( { products }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-6'>
      {products.map((product) =>(
        <ProductItem
        key={product._id}
         product={product}/>
      ))}
    </div>
  )
}

export default SimilarProducts
