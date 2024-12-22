
import React, { useState } from 'react'

const DisplayAddress = ({ address }) => {


    const handleAddressSelect = (addressId) => {
        console.log("i clicked on " + addressId);

    };

    return (
        <div className="p-3 ">
            <div className='flex items-center space-x-4'>
            <input
                type="radio"
                id={address._id}
                name="selectedAddress"
                value={address._id}
                // checked={selectedAddress === address._id}
                onChange={() => handleAddressSelect(address._id)}
                className='size-5'
            />
            <div className='flex flex-col'>
            <label htmlFor={address._id} className='mb-2'>
                <span>{address?.fullName}, </span>
                <span>{address?.address}, </span>
                <span>{address?.landmark}, </span>
                <span>{address?.city}, </span>
                <span>{address?.state}, </span>
                <span>{address?.pincode}</span>
            </label>
            <button 
            className='self-start text-blue-500 hover:text-blue-700 hover:underline'>Edit Address</button>
            </div>
            </div>
        </div>
    )
}

export default DisplayAddress