
import React, { useContext, useEffect, useState } from 'react'
import AddressForm from '../../../components/Checkout/AddressForm'
import PaymentMethodSelector from '../../../components/Checkout/PaymentMethodSelector'
import OrderSummary from '../../../components/Checkout/OrderSummary'
import Logo from '../../../assets/Logo.jpg'
import { CiLock } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import useFetchAddress from '../../../hooks/useFetchAddress'
import CheckoutFooter from '../../../components/Checkout/CheckoutFooter'
import axios from 'axios';
import AuthContext from '../../../Context/AuthProvider'
import { API_ENDPOINT } from '../../../apiClient/apiEndPoint'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {

    const { addresses, loading, error, triggerRefetch } = useFetchAddress();
    const[toggle, setToggle] = useState(false);
    const { getToken } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleDeleteAddress = async (addressId) => {
        const token = getToken();

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json", 
                },
                withCredentials: true,
            };
            const {data} = await axios.delete(`${API_ENDPOINT.DELETE.delete_address}/deleteAddress/${addressId}`, config)
            console.log(data);
            triggerRefetch();
            
        } catch (error) {
            console.log(error);
            
        }
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
                <FaCartArrowDown 
                className= 'text-2xl custom3:text-3xl sm:text-4xl text-slate-800 cursor-pointer'
                onClick={()=>{navigate('/cart')}}
                />
                </div>
            </div>
            <div className='flex flex-col md:flex-row p-6'>
                <div className='flex flex-col'>
                    <AddressForm 
                    addresses={addresses} handleToggle={handleToggle} toggle={toggle} handleDeleteAddress={handleDeleteAddress} triggerRefetch={triggerRefetch}/>
                    <PaymentMethodSelector />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
            <div className='mt-20'>
                <CheckoutFooter />
            </div>
        </div>
    )
}

export default CheckoutPage
