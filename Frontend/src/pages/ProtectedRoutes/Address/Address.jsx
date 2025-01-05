
import React from 'react'
import useFetchAddress from '../../../hooks/useFetchAddress';
import ShowAddress from '../../../components/Address/ShowAddress';

const Address = () => {
const { addresses, loading, error, triggerRefetch } = useFetchAddress();

  return (
    <div>
        <div className='lg:max-w-[1000px] mx-auto mt-10'>
            <h2 className='text-2xl  font-roboto'>Your Addresses</h2>
            <ShowAddress addresses={addresses} triggerRefetch={triggerRefetch} />
        </div>
    </div>
  )
}

export default Address