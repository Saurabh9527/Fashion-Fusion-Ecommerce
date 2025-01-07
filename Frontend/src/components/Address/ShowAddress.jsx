
import React, { useState } from 'react'
import DisplayAddress from './DisplayAddress'
import { FaPlus } from "react-icons/fa6";
import AddressModals from '../Modals/AddressModals';

const ShowAddress = ({ addresses, triggerRefetch, handleRemoveAddress }) => {
    
        const [isModalOpen, setIsModalOpen] = useState(false);
        
        const handleAddNewAddress = () => {
            setIsModalOpen(true);
        };
        const handleCloseModal = () => {
            setIsModalOpen(false);
        };

    return (
        <div className='mt-6'>
            <div className='p-2 grid custom5:grid-cols-2 custom2:grid-cols-3 gap-3'>
                <div
                onClick={handleAddNewAddress} 
                className='border-2 border-dotted border-gray-400 min-h-[266px] flex items-center justify-center cursor-pointer'>
                    <div className='flex flex-col items-center'>
                     <FaPlus className='mb-3 size-16 text-gray-300'/>
                     <h2 className='text-2xl font-bold'>Add Address</h2>
                    </div>
                </div>
                {
                    addresses.map((address) => (
                        <DisplayAddress key={address._id} address={address} triggerRefetch={triggerRefetch} handleRemoveAddress={handleRemoveAddress} />
                    ))
                }
            </div>
            {isModalOpen && (<AddressModals handleCloseModal={handleCloseModal} triggerRefetch={triggerRefetch} />)}
        </div>
    )
}

export default ShowAddress