
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

const Pagination = ({ pageNo, onPageChange, totalPages }) => {

    const handleNext = () => {
        //console.log("i click");
        
        onPageChange(pageNo + 1)
    }

    const handlePrevious = () => {
        //console.log("i click prev")
        onPageChange(pageNo - 1)
    }

    return (
        <div className="flex items-center gap-x-4 mx-auto mt-8 mb-4">

            <span
                className={`flex items-center justify-center border font-medium px-5 py-2 rounded-md  cursor-pointer
                    ${pageNo === 1 ? 'border-gray-300 text-gray-400 cursor-default' : 'border-gray-300 hover:border-gray-500 '}`}
                    onClick={pageNo !== 1 ? handlePrevious : null}>
                <span className='mt-1'>
                    <MdArrowBackIos />
                </span>
                Previous
            </span>

            <span className='text-customGray text-sm font-roboto'>Page {pageNo} of {totalPages} </span>

            <span
                className={`flex items-center justify-center border font-medium px-5 py-2 rounded-md cursor-pointer 
                ${pageNo === totalPages ? 'border-gray-300 text-gray-400 cursor-default' : 'border-gray-300 hover:border-gray-500 '}`}
                onClick={pageNo !== totalPages ? handleNext : null} 
            >
                Next
                <span className='mt-1'>
                    <IoIosArrowForward />
                </span>
            </span>
        </div>
    )
}

export default Pagination
