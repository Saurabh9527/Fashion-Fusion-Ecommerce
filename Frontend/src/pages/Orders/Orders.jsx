
import React, { useEffect } from 'react'
import useOrders from '../../hooks/useOrders';
import OrdersDisplay from '../../components/Orders/OrdersDisplay';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { orders, loading,  error} = useOrders();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
    

    return (
        <div>
            <div className='md:max-w-[700px] lg:max-w-[950px] mt-10 md:mx-auto ml-6 mr-6'>
            <h3 className='text-3xl font-medium mb-5'>Your Orders</h3>
            {
                orders.map(( order) => (
                    <div key={order._id}>
                    <div className='border-t border-l border-r bg-gray-100'>
                        <div className='flex justify-between p-4'>
                            <div className='flex justify-between gap-8'>
                                <div className='text-customGray font-medium'>
                                    <h2>ORDER PLACED</h2>
                                    <p>{formatDate(order.updatedAt)}</p>
                                </div>
                                <div className='text-customGray font-medium'>
                                    <h2>TOTAL</h2>
                                    <p>₹{order.totalPrice}.00</p>
                                </div>
                                <div className='text-customGray font-medium'>
                                    SHIP TO
                                </div>
                            </div>
                            <Link 
                            to={`/order-details/${order._id}`} 
                            className='text-sky-700 hover:underline cursor-pointer'
                            >
                                View order details
                            </Link>
                        </div>
                    </div>
                    <div  
                    className='border-b border-l border-r mb-4 rounded-b-lg shadow '>
                        <OrdersDisplay key={order._id} order={order} />
                    </div>
                    </div>
                ))
            }
             </div>
        </div>
    )
}

export default Orders