
import React, { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { toast } from 'react-toastify';

const Contact = () => {

    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Successfull! We'll get back to you shortly.")
        setEmail("");
        setContactNo("");
        setMessage("");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='relative'>
                <div>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661593363765-12ccec84a499?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
                        alt="customer-care-photo"
                        className='w-full object-cover min-h-[700px]' />
                </div>

                <div className=' absolute top-0 left-0 right-0 w-full '>
                    <div className=' mt-3 custom4:mt-20 border shadow-xl rounded-lg flex flex-col custom4:flex-row p-4 gap-4 md:max-w-[730px] md:mx-auto mr-4 ml-4'>
                        <div className='flex flex-col pl-5 custom4:pl-0'>
                            <h2 className='text-2xl font-medium text-black mb-5'>CONTACT US</h2>
                            <div className='mb-3'>
                                <h3 className='flex items-center font-medium text-lg'>
                                    <IoIosCall className='text-yellow-500 mr-2' />
                                    Call Us
                                </h3>
                                <span className='font-medium text-sm'>+91-9322354850</span>
                            </div>
                            <div>
                                <h3 className='flex items-center font-medium text-lg'>
                                    <MdEmail className='text-yellow-500 mr-2 mt-[2px]' />
                                    Email
                                </h3>
                                <span className='font-medium text-sm'>niwatesaurabh2000@gmail.com</span>
                            </div>
                        </div>
                        {/* form */}
                        <div className="rounded w-full shadow-lg">
                            <form 
                            onSubmit={handleSubmit}
                            className='p-2 pl-5 pr-5'>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-black">
                                        Your Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 p-2 py-3 outline-none bg-transparent w-full border-2 rounded shadow-md"
                                        placeholder="Enter your email.."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="contactNo" className="block text-sm font-medium text-black">
                                        Your Contact No:
                                    </label>
                                    <input
                                        type="tel"
                                        id="contactNo"
                                        className="mt-1 p-2 py-3 outline-none bg-transparent w-full border-2 rounded shadow-md"
                                        placeholder="Enter your contact number"
                                        value={contactNo}
                                        onChange={(e) => setContactNo(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-black">
                                        Message:
                                    </label>
                                    <textarea
                                        id="message"
                                        className="mt-1 p-2 py-3 outline-none bg-transparent w-full border-2 rounded shadow-md resize-none"
                                        placeholder="Enter your message"
                                        rows={5}
                                        cols={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="px-4 py-3 w-full bg-blue-500 text-white font-roboto rounded-full shadow-md font-medium hover:bg-blue-600">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact