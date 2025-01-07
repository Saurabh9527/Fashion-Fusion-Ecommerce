
import React, { useContext } from 'react'
import useFetchAddress from '../../../hooks/useFetchAddress';
import ShowAddress from '../../../components/Address/ShowAddress';
import AuthContext from '../../../Context/AuthProvider';
import { API_ENDPOINT } from '../../../apiClient/apiEndPoint';
import axios from 'axios';
import ProductCarousel from '../../../components/Product-Carousel/ProductCarousel';

const Address = () => {
const { addresses, loading, error, triggerRefetch } = useFetchAddress();
const { getToken } = useContext(AuthContext);

const handleRemoveAddress = async(addressId) =>{
  const token = getToken();
  try {
      const config = {
          headers: {
              Authorization: `Bearer ${token}`, 
              "Content-Type": "application/json", 
          },
          withCredentials: true,
      };
      const {data} = await axios.delete(`${API_ENDPOINT.DELETE.delete_address}/deleteAddress/${addressId}`, config)
      console.log(data);
      triggerRefetch();
      
  } catch (error) {
      console.log(error);
      
  }
}

  return (
    <div>
        <div className='sm:max-w-[630px] md:max-w-[760px] custom:max-w-[850px] lg:max-w-[1000px] sm:mx-auto ml-5 mr-5 mt-10'>
            <h2 className='text-2xl  font-roboto'>Your Addresses</h2>
            <ShowAddress addresses={addresses} triggerRefetch={triggerRefetch} handleRemoveAddress={handleRemoveAddress} />
            <ProductCarousel />
        </div>
    </div>
  )
}

export default Address