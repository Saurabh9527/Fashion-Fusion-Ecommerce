
import React, { useContext, useState } from 'react'
import AuthContext from '../../Context/AuthProvider';
import axios from 'axios';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import '../Products/ProductItem/ProductItem.css'

const CartProduct = ({ product, onQuantityUpdate }) => {

  const [loading, setLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false);
  const { getToken } = useContext(AuthContext);

  const handleQuantityChange = async (e) => {
    const token = getToken();
    const selectedQuantity = parseInt(e.target.value, 10);
    // console.log("Selected Quantity:", selectedQuantity);
   const productId =  product.productId._id
    // console.log(product.productId._id);

    try {
      setLoading(true);
      const config = {
        headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json", 
        },
        withCredentials: true,
    };

    const { data } = await axios.put(
      `${API_ENDPOINT.PUT.update_quantity}/${productId}`,
        { quantity: selectedQuantity },
        config
    );
    onQuantityUpdate();
      
    } catch (error) {
        console.log(error);  
    }finally {
      setLoading(false);
    }
  }

  const handleDeleteCartProduct =  async () =>{
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
      `${API_ENDPOINT.DELETE.delete_cart_product}/${productId}`,
      config
    );
    
    onQuantityUpdate();
      
    } catch (error) {
        console.log(error);  
    }finally {
      setLoading(false);
    }
    
  }

  const handleAddWishlistProduct = async () => {
    const token = getToken();
    const productId =  product.productId._id;

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
      `${API_ENDPOINT.POST.add_to_wishlist}`,
       { productId: productId },
      config
    );

    console.log(data);
    
    
    onQuantityUpdate();
      
    } catch (error) {
        console.log(error);  
    }finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex space-x-4 '>
      <div className='relative w-[180px] h-[180px]'>
      {!imageLoaded && (
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
        )}
        <img
          src={product?.productId?.thumbnail}
          alt={product?.productId?.title}
          className={`object-cover h-[180px] w-[180px] hover:border-2 p-1 border-gray-200 rounded-lg transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)} 
          />
      </div>

      <div className='flex flex-col'>
        <h2 className=' text-sm custom3:text-xl font-medium font-roboto'>{product?.productId?.title}</h2>
        <div className='flex items-center pt-2 pb-2 mt-1'>
          <h3 className='text-sm font-medium font-roboto'>₹{product?.productId?.price}</h3>
        </div>
        <div className='flex items-center gap-2'>
          {/* <select className='border rounded-lg px-2 mt-1 outline-none shadow-md h-[35px] font-medium font-roboto cursor-pointer hover:border-gray-400'>
                <option value="1" className=''>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select> */}
          <select
            className='border rounded-lg px-2 mt-1 outline-none shadow-md h-[35px] font-medium font-roboto cursor-pointer hover:border-gray-400'
            value={product?.quantity || 1}
            onChange={handleQuantityChange}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <h2 className='font-medium font- text-lg ml-2 mr-2'>{product?.quantity}</h2>
        </div>
        <div className='flex text-sm text-blue-900 pt-2 mt-1'>
          <button 
          className='hover:underline'
          onClick={handleDeleteCartProduct}>Delete<span className='text-gray-400 ml-1'>|</span></button>
          <button 
          className='ml-1 hover:underline'
          onClick={handleAddWishlistProduct}>Save for later<span className='text-gray-400 ml-1 '>|</span></button>
          <button className='ml-1 hover:underline hidden custom3:block'>See more like this</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct


{/* <button className='px-2 py-1 mt-1 border rounded-lg outline-none shadow-md font-roboto  hover:border-gray-400'>update</button> */ }
