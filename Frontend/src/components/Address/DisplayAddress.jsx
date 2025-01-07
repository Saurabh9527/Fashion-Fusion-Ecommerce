
import React, { useState } from 'react'
import EditAddressModal from '../Modals/EditAddressModal';

const DisplayAddress = ({ address, triggerRefetch, handleRemoveAddress }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditAddress = () =>{
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                <span 
                onClick={()=>{handleEditAddress(address._id)}}
                className='hover:underline cursor-pointer'>Edit</span>
                <span className='ml-2 mr-2'>|</span>
                <span
                onClick={()=>{handleRemoveAddress(address._id)}}
                 className='hover:underline cursor-pointer'>Remove</span>
            </div>
            {isModalOpen && <EditAddressModal handleCloseModal={handleCloseModal} address={address} triggerRefetch={triggerRefetch}/>}
        </div>
    )
}

export default DisplayAddress