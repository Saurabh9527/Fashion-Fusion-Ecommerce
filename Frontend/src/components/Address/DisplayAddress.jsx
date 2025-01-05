
import React, { useState } from 'react'

const DisplayAddress = ({ address, triggerRefetch }) => {


    return (
        <div className='border pl-4 pt-4 min-h-[266px]  border-gray-300 shadow-md rounded-md'>
            <div className='font-semibold'>{address?.fullName} </div>
            <span>{address?.address} </span>
            <span>{address?.landmark}, </span>
            <div>{address?.city}, </div>
            <span>{address?.state}, </span>
            <span>{address?.pincode}</span>
            <div>Phone Number: {address?.mobileNumber}</div>
            <div className='mt-4 text-sky-700 font-medium '>
                <span className='hover:underline cursor-pointer'>Edit</span>
                <span className='ml-2 mr-2'>|</span>
                <span className='hover:underline cursor-pointer'>Remove</span>
            </div>
        </div>
    )
}

export default DisplayAddress