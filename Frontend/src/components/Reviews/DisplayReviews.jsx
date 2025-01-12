
import React, { useContext, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { IoStar } from "react-icons/io5";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthContext from '../../Context/AuthProvider';

const DisplayReviews = ({ review, decodedToken, triggerRefetch }) => {
  const isOwner = decodedToken && decodedToken.id === review.userId;
  
  const date = new Date(review?.updatedAt);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
  const [loading, setLoading] = useState(true);
  const { getToken } = useContext(AuthContext);

  const handleDeleteReview = async () => {
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
          const reviewId = review?._id
          
          const { data } = await axios.delete(`${API_ENDPOINT.DELETE.delete_review}/${reviewId}`,
            config
          );      
          if(data.success) {
            toast.success(data?.message);
            triggerRefetch();
          }
        } catch (error) {
          toast.error(error?.response?.data?.message)
        }finally{
          setLoading(false);
        }
  }

  return (
    <div className='p-2 mb-2'>
      <div className='flex flex-col'>
        <div className='flex items-center mb-2'>
          <RxAvatar className='size-8 text-gray-600' />
          <span className='ml-4'>{review?.name}</span>
        </div>

        <div className="flex items-center mb-2">
          {[...Array(5)].map((star, index) => (
            <IoStar
              key={index}
              className={`size-5 ${index < review.rating ? 'text-orange-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className='font-semibold mb-2'>
          Good Quality
        </div>
        <div className='mb-2'>
          <p className='font-roboto'>{review?.comment}</p>
        </div>
        <div className='flex justify-between mb-1'>
          <div className='text-customGray font-medium'>{formattedDate}</div>
          <div className='flex items-center gap-x-11'>
              <div className='flex items-center gap-x-1'>
                <BiLike className='cursor-pointer' />
                <span className='text-xs'>2</span>
              </div>
              <div className='flex items-center gap-x-1'>
                <BiDislike className='cursor-pointer' />
                <span className='text-xs'>2</span>
              </div>
          </div>
        </div>
        <div>
          <button 
          className='text-sky-600 text-sm font-medium hover:underline'
          onClick={handleDeleteReview}>{isOwner && 'Delete'}</button>
        </div>
      </div>
    </div>
  )
}

export default DisplayReviews

// <div>
// {review.comment}
// <RxAvatar />
// {isOwner && (
// <>
//   <button className='border'>Edit</button>
//   <button className='border ml-3'>Delete</button>
// </>
// )}
// </div>