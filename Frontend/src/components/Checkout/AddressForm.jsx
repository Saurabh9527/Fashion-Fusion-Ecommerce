
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import AddressModals from '../Modals/AddressModals';
import DisplayAddress from './DisplayAddress';
import { BsDashCircle } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";

const AddressForm = ({ addresses, handleToggle, toggle }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddNewAddress = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className='min-w-[350px] border border-gray-200 shadow'>
                <div className='flex justify-between p-3'>
                    <div className=' w-9/12'>
                        <div className='font-bold font-sans text-xl'>Delivering to</div>
                        {
                            !toggle ?
                                (
                                    <div className='font-roboto mt-3'>
                                        <span>{addresses[0]?.fullName},</span>
                                        <span> {addresses[0]?.address},</span>
                                        <span> {addresses[0]?.landmark},</span>
                                        <span> {addresses[0]?.city},</span>
                                        <span> {addresses[0]?.state},</span>
                                        <span> {addresses[0]?.pincode}</span>
                                    </div>
                                )
                                :
                                (
                                    <div className='font-roboto mt-3'>
                                        {addresses.map((address)=> (
                                            <div 
                                            className='mb-3 border rounded-lg shadow'
                                            key={address?._id}
                                            >
                                            <DisplayAddress address={address} />
                                            </div>
                                        ))}
                                    </div>
                                )
                        }
                        <div
                            className='text-blue-500 hover:text-blue-700  font-roboto cursor-pointer mt-5 hover:underline'
                            onClick={handleAddNewAddress}>Add New address</div>
                    </div>
                    <div className='flex flex-col justify-between'>
                    {/* <div
                        className='text-blue-500 hover:text-blue-700 font-roboto text-center  cursor-pointer hover:underline'
                        onClick={handleToggle}>
                        Change address
                    </div> */}
                    {
                        toggle ? (
                            <div 
                            className='self-end text-blue-500 hover:text-blue-700'
                            onClick={handleToggle}>
                            <BsDashCircle className='font-bold size-5 cursor-pointer'/>
                            </div>
                        ) : (
                            <div 
                            className='self-end text-blue-500 hover:text-blue-700'
                            onClick={handleToggle}>
                            <GoPlusCircle className='font-bold size-5 cursor-pointer'/>
                            </div>
                        )
                    }

                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (<AddressModals handleCloseModal={handleCloseModal} />)}
        </div>
    )
}

export default AddressForm
