
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';

const useFetchProducts = ( pageNo, limit ) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_ENDPOINT.GET.get_products}?pageNo=${pageNo}&limit=${limit}`);
            setProducts(data?.products);  
        } catch (error) {
            setError(error.message);
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return { products, loading, error };
    
}

export default useFetchProducts
