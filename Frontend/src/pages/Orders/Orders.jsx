
import React, { useEffect } from 'react'
import useOrders from '../../hooks/useOrders';
import OrdersDisplay from '../../components/Orders/OrdersDisplay';
import { Link } from 'react-router-dom';
import OrderShimmerUI from '../../ShimmerUI/OrderShimmerUI/OrderShimmerUI';

const Orders = () => {
    const { orders, loading, error } = useOrders();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    if (loading) {
        return <div><OrderShimmerUI /></div>
    }


    return (
        <div>
            <div className='md:max-w-[700px] lg:max-w-[950px] mt-10 md:mx-auto ml-6 mr-6'>
                {  !orders || orders.length === 0 ? '' : <h3 className='text-3xl font-medium mb-5'>Your Orders</h3>}
                {
                    !orders || orders.length === 0 ? (
                        <div className='max-w-[450px] mx-auto'>
                            <div className=' border border-gray-200 shadow-sm p-2'>
                                <img 
                                src="https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww" 
                                alt="empty-order" 
                                />
                                <div className='w-[60%] mx-auto mt-5 mb-2'>
                                    <h2 className='text-xl font-semibold'>NO ORDER FOUND</h2>
                                    <p className='font-medium mt-3 text-customGray'>Looks like you haven't made your order yet</p>
                                    <Link
                                    to='/home'
                                    className='border w-full block text-center mt-3 py-3 rounded-full shadow-xl bg-red-500 text-white font-roboto font-medium hover:bg-red-600'>Back to Shop</Link>
                                </div>
                            </div>
                        </div>
                    ) :
                        (orders.map((order) => (
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
                        )))
                }
            </div>
        </div>
    )
}

export default Orders