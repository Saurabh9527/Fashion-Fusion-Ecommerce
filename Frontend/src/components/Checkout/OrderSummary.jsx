
import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthProvider';

const OrderSummary = () => {

  const { orderDetails } = useContext(AuthContext);
  return (
            <div className='flex flex-col min-w-[350px] mt-5 md:mt-0 custom3:min-w-[400px] md:ml-2 pl-4 pr-4 pb-4 border shadow-md p-6'>
                <h1 className='text-xl font-medium font-sans pb-2 mb-1'>Summary</h1>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Subtotal</h2>
                    <h3 className='font-roboto font-normal text-sm text-gray-800'>₹{orderDetails.totalPrice}</h3>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Delivery Charges</h2>
                    <h3 className={`font-roboto font-normal text-sm ${orderDetails.totalPrice < 400 ? 'text-gray-800' : 'text-green-900'}`}>
                        {orderDetails.deliveryCharges}
                    </h3>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Discount</h2>
                    <h3 className='font-roboto font-normal text-sm text-gray-800'>{orderDetails.discount}</h3>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <h2 className='font-semibold font-roboto text-lg'>Order Total</h2>
                    <h3 className='font-roboto font-semibold text-lg text-gray-800'>₹{orderDetails.finalAmount}</h3>
                </div>
            </div>
  )
}

export default OrderSummary