
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import axios from 'axios';
import AuthContext from '../../Context/AuthProvider';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import { toast } from 'react-toastify';

const ReviewForm = () => {
    const { prodId } = useParams();
    const { product, loading, error } = useProductDetails(prodId);

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(true);
    const { getToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleMouseEnter = (rate) => {
        setHoverRating(rate);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        try {
            setDone(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, 
                    "Content-Type": "application/json", 
                },
                withCredentials: true,
            };
            const reviewData = {
                productId: prodId,
                name:name,
                rating:rating,
                title:title,
                comment:description
            }
            const { data } = await axios.post(`${API_ENDPOINT.POST.post_reviews}/addReview`, 
                reviewData,
                config
            );
            if(data?.success){
                toast.success(data?.message);
                setRating('');
                setName('');
                setTitle('');
                setDescription('');
                navigate(`/product/${prodId}`)
            }      
        } catch (error) {   
            toast.error(error?.response?.data?.message)
        }finally{
            setDone(false);
        }
    };

    const handleClear = () => {
        setRating(0);
    };

      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return (
        <div>
            <div className='ml-8 mr-8 sm:max-w-[620px] custom4:max-w-[660px] md:max-w-[700px] lg:max-w-[900px] mt-10 sm:mx-auto'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-2xl font-semibold'>Create Review</h2>
                    <div className='p-3  mt-5'>
                        <div className='flex flex-col'>
                            <div className='flex mb-8'>
                                <img
                                    src={product?.thumbnail}
                                    alt={product?.title}
                                    className='h-16 w-16'
                                />
                                <h3
                                    className='text-sm sm:text-base truncate font-sans font-normal mt-2 ml-6'>{product?.description}</h3>
                            </div>
                            <hr className='mb-8' />
                            <div className='flex justify-between '>
                            <h2 className='text-xl font-semibold mb-3'>Overall rating</h2>
                            {
                            rating !==0 &&
                            <span
                            onClick={handleClear} 
                            className='text-sky-600 font-medium cursor-pointer hover:underline'>Clear
                            </span>
                            }
                            </div>
                            <div className="flex mb-8">
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className={`text-5xl ${index <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                            onClick={() => handleRating(index)}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            &#9733;
                                        </button>
                                    );
                                })}
                            </div>
                            <hr className='mb-8' />
                            <div className="mb-8">
                                <label htmlFor="name" className="block text-xl font-semibold mb-4">Display Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                                    placeholder='Your name as it will appear'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <hr className='mb-8' />
                            <div className="mb-8">
                                <label htmlFor="title" className="block text-xl font-semibold mb-4">Add a headline</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                                    placeholder='What most important to know?'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <hr className='mb-8' />
                            <div className="mb-8">
                                <label htmlFor="description" className="block text-xl font-semibold mb-4">Add a written review</label>
                                <textarea
                                    id="description"
                                    className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                                    placeholder='What did you like or dislike? What did you use this product for?'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <hr className='' />
                            <p className='text-xs sm:text-sm text-customGray ml-2 mb-8'>We will notify you via email as soon as your review is processed.</p>
                            <button
                                type="submit"
                                className="w-fit px-3 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 self-end"
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm