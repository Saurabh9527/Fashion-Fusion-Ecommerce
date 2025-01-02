
import React, { useContext, useState } from 'react'
import AuthContext from '../../Context/AuthProvider';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import axios from 'axios';
import { toast } from 'react-toastify';

const WishlistProduct = ({ product, refreshWishlist }) => {

    const [loading, setLoading] = useState(true)
    const { getToken } = useContext(AuthContext);

    const handleDeleteWishlistProduct = async () => {
        const token = getToken();
        const productId =  product.productId._id

        try {
            setLoading(true);
            const config = {
              headers: {
                  Authorization: `Bearer ${token}`, 
                  "Content-Type": "application/json", 
              },
              withCredentials: true,
          };

          const { data } = await axios.delete(
            `${API_ENDPOINT.DELETE.delete_wishlist_product}/${productId}`,
            config
          );
          if(data.success){
            toast.success(data.message);
            refreshWishlist();
          }     
            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    const handleAddToCart  = async () => {
        const token = getToken();
        const productId =  product.productId._id 
        
        try {
            setLoading(true);
            const config = {
              headers: {
                  Authorization: `Bearer ${token}`, 
                  "Content-Type": "application/json", 
              },
              withCredentials: true,
          };

          const { data } = await axios.post(
            `${API_ENDPOINT.POST.remove_from_wishList_addTo_cart}/${productId}`,
            {},
            config
          );

          if(data.success) {
            toast.success(data.message);
            refreshWishlist();
          }        
            
        } catch (error) {
            console.log(error);        
        }finally{
            setLoading(false);
        }
    }


    return (
        <div className='flex space-x-4 '>
            <div>
                <img
                    src={product?.productId?.thumbnail}
                    alt={product?.productId?.title}
                    className='object-cover h-[180px] w-[180px] hover:border-2 p-1 border-gray-200 rounded-lg' />
            </div>

            <div className='flex flex-col'>
                <h2 className=' text-sm custom3:text-xl font-medium font-roboto'>{product?.productId?.title}</h2>
                <div className='flex text-sm text-blue-900 pt-2 mt-1'>
                    <button
                        className='hover:underline'
                        onClick={handleDeleteWishlistProduct}>Delete<span className='text-gray-400 ml-1'>|</span></button>
                    <button
                        onClick={handleAddToCart}
                        className='ml-1 hover:underline'>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WishlistProduct