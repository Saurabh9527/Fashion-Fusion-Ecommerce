
import React from 'react'
import { MdOutlineAssignmentReturn } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const OrdersDisplay = ({order}) => {
  const navigate = useNavigate();
  return (
    <div className='p-2 pt-4 pb-4 flex'>
        <img
        onClick={()=>{ navigate(`/product/${order?.products[0]?.productId?._id}`)}}
        className='max-w-[100%] h-[150px] custom5:h-[200px] cursor-pointer' 
        src={order?.products[0]?.productId?.thumbnail} 
        alt={order?.products[0]?.productId?.title} 
        />
        <div className='flex flex-col pl-4'>
        <div
        onClick={()=>{ navigate(`/product/${order?.products[0]?.productId?._id}`)}} 
        className=' text-sky-600 hover:underline cursor-pointer'>
        {order?.products[0]?.productId?.title}
        </div>
        <div className='flex flex-col custom6:flex-row gap-3 mt-6'>
        <button
        onClick={()=>{ navigate(`/product/${order?.products[0]?.productId?._id}`)}} 
        className='flex border items-center p-2 px-3 w-fit rounded-full bg-yellow-400 hover:bg-yellow-500'>
           <img
           className=' size-5 custom5:size-7 mr-3' 
           src='https://m.media-amazon.com/images/S/sash/7uhR68oBHEcdiIr.png' 
           alt="return-icon" />
           Buy it again
        </button>
        <button 
        onClick={()=>{ navigate(`/product/${order?.products[0]?.productId?._id}`)}}
        className='flex border items-center p-2 px-3 w-fit rounded-full hover:border-gray-400'>
           Product Details
        </button>
        </div>
        </div>
    </div>
  )
}

export default OrdersDisplay