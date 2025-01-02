
import React, { useContext, useEffect, useState } from 'react'
import { API_ENDPOINT } from '../apiClient/apiEndPoint';
import AuthContext from '../Context/AuthProvider';
import axios from 'axios';

const useWishlistProduct = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const { getToken } = useContext(AuthContext);

    const fetchCartProducts = async (req, res) => {
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
            const { data } = await axios.get(`${API_ENDPOINT.GET.get_wishlist_products}`, config);      
            setProducts(data?.wishlist?.products);

        } catch (error) {
            setError(error.message);
        }finally {
            setLoading(false)
        }
    }

        useEffect(() => {
            fetchCartProducts();
        }, [])
    
       return { products, loading, error, refetch: fetchCartProducts };

}

export default useWishlistProduct