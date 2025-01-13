
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
  const token = getToken();
  const like = review.likes.includes(decodedToken && decodedToken.id);
  const dislike = review.disLikes.includes(decodedToken && decodedToken.id);

  const handleDeleteReview = async (reviewId) => {
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

      const { data } = await axios.delete(`${API_ENDPOINT.DELETE.delete_review}/${reviewId}`,
        config
      );
      if (data.success) {
        toast.success(data?.message);
        triggerRefetch();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
      setLoading(false);
    }
  }

  const handleLikes = async (reviewId) => {
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

      const { data } = await axios.put(`${API_ENDPOINT.PUT.add_like}/${reviewId}/like`,
        {},
        config
      );
      if (data.success) {
        triggerRefetch();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
      setLoading(false);
    }

  }

  const handleDisLikes = async (reviewId) => {
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

      const { data } = await axios.put(`${API_ENDPOINT.PUT.add_dislike}/${reviewId}/disLike`,
        {},
        config
      );
      if (data.success) {
        triggerRefetch();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
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
          {review?.title}
        </div>
        <div className='mb-2'>
          <p className='font-roboto'>{review?.comment}</p>
        </div>
        <div className='flex justify-between mb-1'>
          <div className='text-customGray font-medium'>{formattedDate}</div>
          <div className='flex items-center gap-x-11'>
            {token &&
              <div className='flex items-center gap-x-1'>
                <BiLike
                  onClick={() => { handleLikes(review?._id) }}
                  className={`cursor-pointer ${like ? 'fill-orange-700' : ''}`} 
                />
                <span className='text-xs'>{review?.likes.length === 0 ? '' : `${review?.likes.length}`}</span>
              </div>
            }
            {token &&
              <div className='flex items-center gap-x-1'>
                <BiDislike
                  onClick={() => { handleDisLikes(review?._id) }}
                  className={`cursor-pointer ${dislike ? 'fill-orange-700' : ''}`} 
                  />
                <span className='text-xs'>{review?.disLikes.length === 0 ? '' : `${review?.disLikes.length}`}</span>
              </div>
            }
          </div>
        </div>
        <div>
          <button
            className='text-sky-600 text-sm font-medium hover:underline'
            onClick={() => { handleDeleteReview(review?._id) }}>{isOwner && 'Delete'}</button>
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