
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='max-w-[500px] custom3:mx-auto ml-5 mr-5 mt-20 text-center'>
      <div className=' text-3xl font-roboto mb-5'>404</div>
      <div className=' text-3xl font-roboto mb-5'>Page Not Found</div>
      <div className=' text-lg mb-5'>Sorry, the page you are looking for does not exist</div>
      <Link
        to="/home"
        className='inline-block bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition'
      >
        GO BACK HOME
      </Link>
    </div>
  )
}

export default NotFound
