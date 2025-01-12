
import React, { useState } from 'react'
import useFetchReview from '../../hooks/useFetchReview'
import { useParams } from 'react-router-dom'
import DisplayReviews from './DisplayReviews';
import {jwtDecode} from 'jwt-decode';


const Reviews = () => { 
    const {prodId} = useParams();  
    const {reviews, loading, error, triggerRefetch} = useFetchReview(prodId)
    const token = localStorage.getItem('jwtToken');
    let decodedToken = null;

    if(token){
        decodedToken = jwtDecode(token);
    }
    
  return (
    <div>
        {
            reviews.map((review) => (
                <DisplayReviews key={review._id} review={review} decodedToken={decodedToken} triggerRefetch={triggerRefetch} />
            ))
        }

    </div>
  )
}

export default Reviews


// import React, { useState } from 'react';

// const ReviewComponent = () => {
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleRating = (rate) => {
//     setRating(rate);
//   };

//   const handleMouseEnter = (rate) => {
//     setHoverRating(rate);
//   };

//   const handleMouseLeave = () => {
//     setHoverRating(0);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     console.log('Rating:', rating);
//     console.log('Title:', title);
//     console.log('Description:', description);
//   };

//   const handleClear = () => {
//     setRating(0);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50">
//       <h2 className="text-2xl font-bold text-center mb-4">Write a Review</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="flex justify-center mb-4">
//           {[...Array(5)].map((star, index) => {
//             index += 1;
//             return (
//               <button
//                 type="button"
//                 key={index}
//                 className={`text-3xl ${index <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-500`}
//                 onClick={() => handleRating(index)}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 &#9733;
//               </button>
//             );
//           })}
//         </div>
//         <div className="flex justify-center mb-4">
//           <button
//             type="button"
//             className="px-3 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
//           <input
//             type="text"
//             id="title"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
//           <textarea
//             id="description"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-3 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit Review
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReviewComponent;