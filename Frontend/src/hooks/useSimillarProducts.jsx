
import React, { useEffect, useState } from 'react'
import { API_ENDPOINT } from '../apiClient/apiEndPoint';
import axios from 'axios';

const useSimillarProducts = (category) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchSimillarProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_ENDPOINT.GET.get_similar_products}?category=${category}`)
            setProducts(data?.products);
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSimillarProducts();
    }, [category])
    
    return { products, loading, error };

}

export default useSimillarProducts
