
import React from 'react'
import { Link } from "react-router-dom";

const ProfileDashboard = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8'>
            <Link to={'/orders'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Your Orders</h2>
                    <h4 className='mt-2 text-customGray text-base'>Track, return or buy things again</h4>
                </div>
            </Link>
            <Link to={'/profileupdate'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Login & Security</h2>
                    <h4 className='mt-2 text-customGray text-base'>Edit login , name and mobile Number</h4>
                </div>
            </Link>
            <Link to={'/orders'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Your Addresses</h2>
                    <h4 className='mt-2 text-customGray text-base'>Edit address for orders and gifts</h4>
                </div>
            </Link>
            <Link to={'/contact'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Contact Us</h2>
                    <h4 className='mt-2 text-customGray text-base'>Contact our customer service via email</h4>
                </div>
            </Link>
            <Link to={'/terms-conditions'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Terms Of Use</h2>
                    <h4 className='mt-2 text-customGray text-base '>Review our terms and conditions for using our services.</h4>
                </div>
            </Link>
            <Link to={'/orders'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Privacy Policy</h2>
                    <h4 
                    className='mt-2 text-customGray text-base text-ellipsis overflow-hidden whitespace-nowrap '>Learn how we collect, use, and protect your personal information.</h4>
                </div>
            </Link>
            <Link to={'/orders'}>
                <div className='border p-4 rounded-md  border-gray-300 hover:bg-gray-100 h-[130px]'>
                    <h2 className='text-lg font-medium'>Delete Account</h2>
                    <h4 className='mt-2 text-customGray text-base'>Permanently delete your account and associated data.</h4>
                </div>
            </Link>
        </div>
    )
}

export default ProfileDashboard