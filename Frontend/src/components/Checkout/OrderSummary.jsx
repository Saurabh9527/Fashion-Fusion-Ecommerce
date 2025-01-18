
import React, { useContext, useState } from 'react'
import AuthContext from '../../Context/AuthProvider';
import { RiSecurePaymentFill } from "react-icons/ri";
import axios from 'axios';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import {toast} from 'react-toastify'
import {  useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
    const { orderDetails, deliveryAddress, paymentMethod, getToken, cartProducts } = useContext(AuthContext);
    const isDisabled = !deliveryAddress || !paymentMethod;
    const [loading, setLoading] = useState(true)
    const billing = JSON.parse(localStorage.getItem('orderDetails'));
    const amount = Math.floor(billing.finalAmount);
    const navigate = useNavigate();

    const formattedProducts = cartProducts.map((item) => ({
        productId: item.productId._id, 
        quantity: item.quantity,
        price: item.productId.price,
        deliveryAddress: {
            fullName: deliveryAddress.fullName,
            mobileNumber: deliveryAddress.mobileNumber,
            address: deliveryAddress.address,
            city: deliveryAddress.city,
            state: deliveryAddress.state,
            pincode: deliveryAddress.pincode,
          },
      }));

    const handlePayment = async () => {
        const token = getToken();
        if (!token) {
            toast.error("Authorization token is missing");
            return;
        }
        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            };
            const response = await axios.post(`${API_ENDPOINT.POST.create_order}/razorpay-order`,
                { amount },
                config
            );       
            if (response.status === 201 && response.data?.orderDetails) {
                handlePaymentVerify(response?.data?.orderDetails)
            } else {
                toast.error("Failed to create order")
            }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handlePaymentVerify = async (data) => {
        const token = getToken();
        const requestBody = {
            products: formattedProducts,
            totalPrice: amount,
            deliveryAddress,
          };
          
        if (!token) {
            toast.error("Authorization token is missing");
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            withCredentials: true,
        };

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: "Saurabh",
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                // console.log("response", response)
                try {

                    const res = await axios.post(`${API_ENDPOINT.POST.verify_order}/razorpay-payment-verify`,
                        {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            ...requestBody,
                        },
                        config
                    )

                    const verifyData = await res.data;

                    if (verifyData.message) {
                        toast.success(verifyData.message)
                        navigate('/orders')
                    }
                } catch (error) {
                    console.error("Error verifying payment:", error);
                    toast.error("Payment verification failed.");
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }


    return (
        <div className='flex flex-col min-w-[350px] mt-5 md:mt-0 custom3:min-w-[400px] md:ml-2 pl-4 pr-4 pb-4 border shadow-md p-6'>
            <h1 className='text-xl font-medium font-sans pb-2 mb-1'>Summary</h1>
            <div className='flex items-center justify-between'>
                <h2 className='font-normal font-roboto'>Subtotal</h2>
                <h3 className='font-roboto font-normal text-sm text-gray-800'>₹{orderDetails.totalPrice}</h3>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='font-normal font-roboto'>Delivery Charges</h2>
                <h3 className={`font-roboto font-normal text-sm ${orderDetails.totalPrice < 400 ? 'text-gray-800' : 'text-green-900'}`}>
                    {orderDetails.deliveryCharges}
                </h3>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='font-normal font-roboto'>Discount</h2>
                <h3 className='font-roboto font-normal text-sm text-gray-800'>{orderDetails.discount}</h3>
            </div>
            <div className='flex items-center justify-between mt-5'>
                <h2 className='font-semibold font-roboto text-lg'>Order Total</h2>
                <h3 className='font-roboto font-semibold text-lg text-gray-800'>₹{orderDetails.finalAmount}</h3>
            </div>
            <button className={`flex justify-center items-center py-3 font-medium mt-2 border bg-rose-500 hover:bg-rose-600 text-white shadow rounded-md ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isDisabled}
                onClick={handlePayment}>
                PAY NOW<RiSecurePaymentFill className='ml-1' />
            </button>
        </div>
    )
}

export default OrderSummary