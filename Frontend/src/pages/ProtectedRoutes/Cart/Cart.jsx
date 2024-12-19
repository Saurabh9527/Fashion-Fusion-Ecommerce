
import React, { useContext } from 'react'
import useCartProduct from '../../../hooks/useCartProduct'
import CartProduct from '../../../components/Cart/CartProduct';

const Cart = () => {
  const { products, loading, error } = useCartProduct();

  if (error) {
    return <div>{error}</div>
  }
  if (loading) {
    return <div>Loading</div>
  }

console.log(products);

  return (
    <div>
      <div className='flex flex-col ml-1 mr-1 custom3:ml-4 custom3:mr-4 sm:max-w-[610px] md:max-w-[680px] lg:max-w-[880px] mt-10 sm:mx-auto '>
        <span className='p-5'>home/productdetails</span>
        <div className=' border border-gray-100 rounded-lg shadow-md'>
        <div className='flex flex-col p-3 sm:p-5 gap-6'>
        {products.map((product) => (
          <CartProduct key={product._id} product={product} />
        ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
