
import React, { useState } from 'react'
import AddressForm from '../../../components/Checkout/AddressForm'
import PaymentMethodSelector from '../../../components/Checkout/PaymentMethodSelector'
import OrderSummary from '../../../components/Checkout/OrderSummary'
import Logo from '../../../assets/Logo.jpg'
import { CiLock } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import useFetchAddress from '../../../hooks/useFetchAddress'

const CheckoutPage = () => {

    const { addresses, loading, error } = useFetchAddress();
    const[toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <div className='p-4 pb-3 flex justify-between items-center shadow-md '>
                <img 
                src={Logo} alt="Logo" 
                className='h-10 custom3:h-12 sm:h-14'/>
                <div className='flex items-center space-x-2'>
                <div className='text-xl custom2:text-2xl sm:text-3xl font-roboto font-medium text-slate-800'>Secure Checkout</div>
                <CiLock className='text-xl custom3:text-2xl sm:text-3xl'/>
                </div>
                <div>
                <FaCartArrowDown className= 'text-2xl custom3:text-3xl sm:text-4xl text-slate-800'/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row p-6'>
                <div className='flex flex-col'>
                    <AddressForm addresses={addresses} handleToggle={handleToggle} toggle={toggle}/>
                    <PaymentMethodSelector />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
            <div>footer</div>
        </div>
    )
}

export default CheckoutPage
