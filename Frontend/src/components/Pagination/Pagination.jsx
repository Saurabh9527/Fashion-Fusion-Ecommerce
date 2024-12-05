
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

const Pagination = ({ pageNo, onPageChange }) => {

    const handleNext = () => {
        onPageChange(pageNo + 1)
    }

    const handlePrevious = () => {
        onPageChange(pageNo - 1)
    }

    return (
        <div className="flex items-center gap-x-4 mx-auto">

            <span
                className="flex items-center justify-center border border-gray-300 font-medium px-5 py-2 rounded-md hover:border-gray-400 cursor-pointer"
                onClick={handlePrevious}>
                <span className='mt-1'>
                    <MdArrowBackIos />
                </span>
                Previous
            </span>

            <span className='text-customGray text-sm font-roboto'>Page {pageNo}</span>

            <span
                className="flex items-center justify-center border border-gray-300 font-medium px-5 py-2 rounded-md hover:border-gray-400 cursor-pointer"
                onClick={handleNext}>
                Next
                <span className='mt-1'>
                    <IoIosArrowForward />
                </span>
            </span>
        </div>
    )
}

export default Pagination
