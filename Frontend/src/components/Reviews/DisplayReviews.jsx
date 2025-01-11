
import React from 'react'

const DisplayReviews = ({review, decodedToken}) => {
    const isOwner = decodedToken && decodedToken.id === review.userId;
  return (
    <div>
        {review.comment}
        <br />
        {isOwner && (
        <>
          <button className='border'>Edit</button>
          <button className='border ml-3'>Delete</button>
        </>
      )}
    </div>
  )
}

export default DisplayReviews