
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../apiClient/apiEndPoint';
import AuthContext from '../Context/AuthProvider';

const useFetchReview = ( productId ) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const { getToken } = useContext(AuthContext);

    const fetchReviews = async() =>{
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
            const {data} = await axios.get(`${API_ENDPOINT.GET.get_reviews}/${productId}`, config)
            setReviews(data?.reviews) 
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    // const triggerRefetch = () => {
    //     setRefresh(prev => !prev); // Toggle `refresh` state to trigger the effect
    //   };

    return { 
        reviews, 
        loading, 
        error,
     };
}

export default useFetchReview