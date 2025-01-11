
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../Context/AuthProvider';
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';

const useOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const { getToken } = useContext(AuthContext);

    const fetchOrders = async() =>{
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
            const {data} = await axios.get(`${API_ENDPOINT.GET.get_orders}`, config)
            setOrders(data?.orders)
             
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return { 
        orders, 
        loading, 
        error
     };
}

export default useOrders