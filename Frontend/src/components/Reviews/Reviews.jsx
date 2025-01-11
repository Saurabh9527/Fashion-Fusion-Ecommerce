
import React from 'react'
import useFetchReview from '../../hooks/useFetchReview'
import { useParams } from 'react-router-dom'
import DisplayReviews from './DisplayReviews';
import {jwtDecode} from 'jwt-decode';


const Reviews = () => { 
    const {prodId} = useParams();  
    const {reviews, loading, error} = useFetchReview(prodId)
    const token = localStorage.getItem('jwtToken');
    let decodedToken = null;

    if(token){
        decodedToken = jwtDecode(token);
    }
    
  return (
    <div>
        {
            reviews.map((review) => (
                <DisplayReviews key={review._id} review={review} decodedToken={decodedToken} />
            ))
        }
    </div>
  )
}

export default Reviews