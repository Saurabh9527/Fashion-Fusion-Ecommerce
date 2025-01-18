
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../Context/AuthProvider';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';
import axios from 'axios';

const useOrderDetails = ( orderId ) => {
    const [order, setOrder] = useState('');
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const { getToken } = useContext(AuthContext);
    
    const fetchOrderDetails = async( ) =>{
        const token = getToken();
        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json", 
                },
                withCredentials: true,
            };
            const {data} = await axios.get(`${API_ENDPOINT.GET.get_order_details}/getOrderDetails/${orderId}`, config)
            setOrder(data?.order)    
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId])


    return { 
        order, 
        loading, 
        error,
     };
}

export default useOrderDetails