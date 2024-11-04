
import React, { Profiler } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { prodId } = useParams();
    
  return (
    <div>
      details page
      <h1>{prodId}</h1>
    </div>
  )
}

export default ProductDetails
