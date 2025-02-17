
import React from 'react'
import useWishlistProduct from '../../../hooks/useWishlistProduct';
import { useNavigate } from 'react-router-dom';
import WishlistProduct from '../../../components/Wishlist/WishlistProduct';
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

function Wishlist() {

  const { products, loading, error, refetch } = useWishlistProduct();
  const navigate = useNavigate();
  //console.log(products);
  
  if (error) {
    return <div>{error}</div>
  }
  if (loading) {
    return <div>{console.log("i am loaded")}</div>
    // TODO show here shimme ui when qyantity update
  }

  const refreshWishlist = () => {
    refetch();
  };

  const handleHomeNavigation = () => {
    navigate('/home')
  }

  return (
    <div>
      { products && products.length > 0
        ?
        (
        <div className='flex flex-col ml-1 mr-1 custom3:ml-4 custom3:mr-4 sm:max-w-[610px] md:max-w-[680px] lg:max-w-[880px] mt-10 sm:mx-auto '>
          <span className='p-5 text-customGray text-sm pl-1 cursor-pointer'>
            <span onClick={handleHomeNavigation}>Home</span> /
          </span>
          <div className=' border border-gray-100 rounded-lg shadow-md'>
            <div className='flex flex-col p-3 sm:p-5 gap-6'>
              {products.map((product) => (
                <WishlistProduct key={product._id} product={product} refreshWishlist={refreshWishlist}/>
              ))}
            </div>
          </div>
        </div>
        )
        :
        (
          <div className='flex flex-col items-center mt-5'>
            <img
              src="https://media.istockphoto.com/id/1400586811/vector/web.jpg?s=612x612&w=0&k=20&c=r5g0JlssvfuZN_fPTSwD4eoqSxXVxNX21w0Xs0NsWNo="
              alt="cart-icon"
              className='size-60'
            />
            <div className='text-4xl font-roboto font-medium mb-4'>Your Wishlist is <span className='text-red-500'>Empty!</span></div>
            <button
              onClick={() => navigate('/home')}
              className='flex items-center border px-10 py-3 rounded-full shadow-xl bg-red-500 text-white font-roboto font-medium hover:bg-red-600 hover:border-gray-600'>
              <span className='mr-2'><FaPersonWalkingArrowLoopLeft /></span>
              Return To Shop</button>
          </div>
        )
      }
    </div>
  )
}

export default Wishlist
