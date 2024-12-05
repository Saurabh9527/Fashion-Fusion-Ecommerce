
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';

const useFetchProducts = ( pageNo, limit, category='' ) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_ENDPOINT.GET.get_products}?pageNo=${pageNo}&limit=${limit}&category=${category}`);
            setProducts(data?.products); 
            console.log(data);
             
        } catch (error) {
            setError(error.message);
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [pageNo, limit, category])

    return { products, loading, error };
    
}

export default useFetchProducts
