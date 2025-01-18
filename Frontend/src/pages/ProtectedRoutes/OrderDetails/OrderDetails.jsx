
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useOrderDetails from '../../../hooks/useOrderDetails';
import OrdersDisplay from '../../../components/Orders/OrdersDisplay';

const OrderDetails = () => {
    const { orderId } = useParams();
    const { order, loading, error } = useOrderDetails(orderId);

    if (loading) {
        return <h2>Loading</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };



    return (
        <div>
            <div className='sm:max-w-[620px] md:max-w-[700px] lg:max-w-[900px] mx-auto mt-5 shadow'>
                <div className='flex flex-col p-5'>
                    <Link
                        to={'/orders'}
                        className='text-sky-800 hover:underline'>
                        Your Orders
                    </Link>
                    <div className='mt-6 text-3xl'>
                        Order Details
                    </div>
                    <div className='mt-2'>
                        Ordered on {formatDate(order?.updatedAt)}
                    </div>
                    <div className='border mt-4 rounded-md shadow'>
                        <div className='p-3 flex justify-between'>
                            <div>
                                <h3 className='font-semibold'>Shipping Address</h3>
                                <div className='mt-2'>
                                    <h2>{order?.deliveryAddress?.fullName}</h2>
                                    <h2>{order?.deliveryAddress?.address}</h2>
                                    <span>{order?.deliveryAddress?.city}, </span>
                                    <span>{order?.deliveryAddress?.state}</span>
                                    <h2>{order?.deliveryAddress?.pincode}</h2>
                                </div>
                            </div>
                            <div>
                                <h3 className='font-semibold mb-3'>Order Summary</h3>
                                <div className='flex gap-x-2'>
                                    <div>
                                        <h2 className='mb-2'>Total:</h2>
                                        <h2 className='font-medium'>Grand Total:</h2>
                                    </div>
                                    <div>
                                        <h2 className='mb-2'>&#8377;{order?.totalPrice}</h2>
                                        <h2 className='font-semibold'>&#8377;{order?.totalPrice}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border mt-3 rounded-md shadow'>
                        <OrdersDisplay order={order}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails