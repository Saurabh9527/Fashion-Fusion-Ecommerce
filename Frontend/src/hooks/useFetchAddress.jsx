
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';
import AuthContext from '../Context/AuthProvider';

const useFetchAddress = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const { getToken } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);

    const fetchAddresses = async() =>{
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
            const {data} = await axios.get(`${API_ENDPOINT.GET.get_addresses}/fetchAddress`, config)
            setAddresses(data?.address) 
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAddresses();
    }, [refresh])

    const triggerRefetch = () => {
        setRefresh(prev => !prev); // Toggle `refresh` state to trigger the effect
      };

    return { 
        addresses, 
        loading, 
        error,
        triggerRefetch
     };

}

export default useFetchAddress