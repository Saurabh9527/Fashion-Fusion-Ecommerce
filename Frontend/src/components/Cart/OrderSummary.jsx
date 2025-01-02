
import React from 'react'
import { Link } from 'react-router-dom';

const OrderSummary = ({ products }) => {

    const totalPrice = products.reduce(
        (acc, product) => acc + (Number(product?.productId?.price) || 0) * (Number(product?.quantity) || 0),
        0
    );

    const roundedTotalPrice = Number(totalPrice.toFixed(2));

    const deliveryCharges = totalPrice < 400 ? '₹40' : 'free';
    const discount = totalPrice > 500 ? '₹20' : '₹0';

    const finalAmount = Number((totalPrice + (totalPrice < 400 ? 40 : 0) + (totalPrice > 500 ? 20 : 0)).toFixed(2));

    return (
        <div className='pl-4 pr-4 pt-4'>
            <div className='flex flex-col min-w-[350px] custom3:min-w-[400px] pl-4 pr-4 pb-4'>
                <h1 className='text-xl font-medium font-sans pb-2 mb-1'>Summary</h1>
                <div className='flex items-center space-x-7 pb-2 mt-1 mb-2'>
                    <input
                        type="text"
                        placeholder='Apply Promo Code'
                        className=' border border-gray-400 shadow-sm  rounded-md px-2 py-2 outline-none hover:border-gray-500'
                    />
                    <button className='px-4 py-3 border rounded-xl font-medium text-sm bg-gray-800 hover:bg-gray-900 text-white'>APPLY</button>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Subtotal</h2>
                    <h3 className='font-roboto font-normal text-sm text-gray-800'>₹{roundedTotalPrice}</h3>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Delivery Charges</h2>
                    <h3 className={`font-roboto font-normal text-sm ${totalPrice < 400 ? 'text-gray-800' : 'text-green-900'}`}>
                        {deliveryCharges}
                    </h3>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Discount</h2>
                    <h3 className='font-roboto font-normal text-sm text-gray-800'>{discount}</h3>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-normal font-roboto'>Total</h2>
                    <h3 className='font-roboto font-normal text-sm text-gray-800'>₹{finalAmount}</h3>
                </div>
                <Link to={'/checkout'} className='mt-4 border py-2 rounded-md bg-slate-800 text-white hover:bg-slate-900 font-roboto font-medium text-center'>Continue</Link>
            </div>
        </div>
    )
}

export default OrderSummary
