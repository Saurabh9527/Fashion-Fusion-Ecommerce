
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import AddressModals from '../Modals/AddressModals';
import DisplayAddress from './DisplayAddress';
import { BsDashCircle } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";

const AddressForm = ({ addresses, handleToggle, toggle, handleDeleteAddress, triggerRefetch }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addressDelivered, setAddressDelivered] = useState(null);

    useEffect(() => {
        if (addresses?.length > 0) {
            setAddressDelivered(addresses[0]);
        }
    }, [addresses]);

    const handleSetDeliveryAddress = (addressId) => {
        const address = addresses.find((address) => address._id === addressId);
        setAddressDelivered(address);
    }

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
                                    addressDelivered ? (
                                        <div className='font-roboto mt-3'>
                                        <span>{addressDelivered?.fullName},</span>
                                        <span> {addressDelivered?.address},</span>
                                        <span> {addressDelivered?.landmark},</span>
                                        <span> {addressDelivered?.city},</span>
                                        <span> {addressDelivered?.state},</span>
                                        <span> {addressDelivered?.pincode}</span>
                                    </div>
                                    ) :(
                                        <div className="font-roboto mt-3 text-gray-500">
                                        Add delivery address
                                      </div>
                                    )
                                )
                                :
                                (
                                    <div className='font-roboto mt-3'>
                                        {addresses.map((address) => (
                                            <div
                                                className='mb-3 border rounded-lg shadow'
                                                key={address?._id}
                                            >
                                                <DisplayAddress 
                                                address={address} handleSetDeliveryAddress={handleSetDeliveryAddress} handleDeleteAddress={handleDeleteAddress} triggerRefetch={triggerRefetch} 
                                                />
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
                                    <BsDashCircle className='font-bold size-5 cursor-pointer' />
                                </div>
                            ) : (
                                <div
                                    className='self-end text-blue-500 hover:text-blue-700'
                                    onClick={handleToggle}>
                                    <GoPlusCircle className='font-bold size-5 cursor-pointer' />
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (<AddressModals handleCloseModal={handleCloseModal} triggerRefetch={triggerRefetch} />)}
        </div>
    )
}

export default AddressForm
