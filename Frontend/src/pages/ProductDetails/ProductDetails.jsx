
import React, { Profiler } from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import ProductDisplay from '../../components/Products/ProductDisplay';

const ProductDetails = () => {
    const { prodId } = useParams();

    const { product, loading, error } = useProductDetails(prodId);

    // TODO
    if(loading){ 
     return <p>Loading</p>
    }
    if(error){
      return <p>{error}</p>
    }
    
  return (
    <div className=''>
      <ProductDisplay product ={product}/>
    </div>
  )
}

export default ProductDetails
