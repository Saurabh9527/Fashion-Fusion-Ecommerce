
import React from 'react'

const CartProduct = ({ product }) => {
  return (
    <div className='flex space-x-4 '>
      <div>
        <img 
        src={product?.productId?.thumbnail} 
        alt={product?.productId?.title}
        className='object-cover h-[180px] w-[180px] hover:border-2 p-1 border-gray-200 rounded-lg' />
      </div>

      <div className='flex flex-col'>
        <h2 className=' text-sm custom3:text-xl font-medium font-roboto'>{product?.productId?.title}</h2>
        <div className='flex items-center pt-2 pb-2 mt-1'>
        <svg width="8" height="10" viewBox="0 0 8 10" className="itemComponents-base-rupeeBoldIcon"><path fillRule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"></path></svg>
        <h3 className='text-sm font-medium font-roboto'>{product?.productId?.price}</h3>
        </div>
        <div className='flex items-center gap-2'>
            <select className='border rounded-lg px-2 mt-1 outline-none shadow-md h-[35px] font-medium font-roboto cursor-pointer hover:border-gray-400'>
                <option value="1" className=''>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <h2 className='font-medium font- text-lg ml-2 mr-2'>{product?.quantity}</h2>
            <button className='px-2 py-1 mt-1 border rounded-lg outline-none shadow-md font-roboto  hover:border-gray-400'>update</button>
        </div>
        <div className='flex text-sm text-blue-900 pt-2 mt-1'>
        <button className='hover:underline'>Delete<span className='text-gray-400 ml-1'>|</span></button>
        <button className='ml-1 hover:underline'>Save for later<span className='text-gray-400 ml-1 '>|</span></button>
        <button className='ml-1 hover:underline hidden custom3:block'>See more like this</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
