
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';

const useProductDetails = ( prodId ) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchProductDetails = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_ENDPOINT.GET.get_product_details}/${prodId}`)
            setProduct(data?.product);
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [prodId])
    
    return { product, loading, error };
}

export default useProductDetails
