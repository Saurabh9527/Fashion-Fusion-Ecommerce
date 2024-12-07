
import React from 'react'

const Categories = ({ handleCategoryChange }) => {
  return (
    <div className='group hidden md:block'>
    <ul className='flex justify-between items-center space-x-3 cursor-pointer '>
      <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300' onClick={() => { handleCategoryChange('') }}>All Products</li>
      <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Men') }}>Men</li>
      <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Women') }}>Women</li>
      <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Watches') }}>Watches</li>
      <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Shoes') }}>Shoes</li>
    </ul>
  </div>
  )
}

export default Categories
