
import React, { useContext } from 'react'
import useCartProduct from '../../../hooks/useCartProduct'
import CartProduct from '../../../components/Cart/CartProduct';
import OrderSummary from '../../../components/Cart/OrderSummary';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, loading, error, refetch } = useCartProduct();
  const navigate = useNavigate();

  const refreshCart = () => {
    refetch();
  };

  const handleHomeNavigation = () => {
    navigate('/home')
  }

  if (error) {
    return <div>{error}</div>
  }
  if (loading) {
    return <div>{console.log("i am loaded")}</div>
    // TODO show here shimme ui when qyantity update
  }

  return (
    <div>
      <div className='flex flex-col ml-1 mr-1 custom3:ml-4 custom3:mr-4 sm:max-w-[610px] md:max-w-[680px] lg:max-w-[880px] mt-10 sm:mx-auto '>
        <span className='p-5 text-customGray text-sm pl-1 cursor-pointer'>
          <span onClick={handleHomeNavigation}>Home</span> /
        </span>
        <div className=' border border-gray-100 rounded-lg shadow-md'>
          <div className='flex flex-col p-3 sm:p-5 gap-6'>
            {products.map((product) => (
              <CartProduct key={product._id} product={product} onQuantityUpdate={refreshCart} />
            ))}
          </div>
        </div>
        <div className='self-end mt-5 border border-gray-100 rounded-lg shadow-md'>
          <OrderSummary products={products} />
        </div>
      </div>
    </div>
  )
}

export default Cart
