
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';

const useSearchProduct = ( query ) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        if (!query) return;
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_ENDPOINT.GET.search_products}?q=${query}&pageNo=1&limit=8`);      
            setProducts(data?.products);
        } catch (error) {
            setError(error.message);
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [query])

   return { products, loading, error };
}

export default useSearchProduct
