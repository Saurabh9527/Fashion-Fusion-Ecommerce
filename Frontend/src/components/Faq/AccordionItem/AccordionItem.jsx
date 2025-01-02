
import React, { useState } from 'react'
import './AccordionItem.css'
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionItem = ({ faq }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className='border border-gray-400 shadow-sm mb-2 rounded-t-lg'>
            <div className=''>
                <div
                    onClick={handleOpen}
                    className='flex justify-between items-center cursor-pointer'>
                    <div
                        className='p-2 font-roboto font-medium'>{faq.question}
                    </div>
                    {
                        open
                            ?
                            (<FiMinus className='mr-2 size-5' />)
                            :
                            (<FiPlus className='mr-2 size-5' />)
                    }

                </div>
                <div className='border'></div>
                {
                    open &&
                    <div className='p-2 pt-3 pb-3 font-roboto text-gray-800 bg-gray-50'>
                        {faq.answer}
                    </div>
                }
            </div>
        </div>
    )
}

export default AccordionItem