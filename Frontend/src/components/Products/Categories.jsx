import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const Categories = ({ handleCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='group hidden md:block'>
        <ul className='flex justify-between items-center space-x-3 cursor-pointer'>
          <li
            className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300'
            onClick={() => { handleCategoryChange('') }}
          >
            All Products
          </li>
          <li
            className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300'
            onClick={() => { handleCategoryChange('Men') }}
          >
            Men
          </li>
          <li
            className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300'
            onClick={() => { handleCategoryChange('Women') }}
          >
            Women
          </li>
          <li
            className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300'
            onClick={() => { handleCategoryChange('Watches') }}
          >
            Watches
          </li>
          <li
            className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300'
            onClick={() => { handleCategoryChange('Shoes') }}
          >
            Shoes
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className='block md:hidden'>
        <CiMenuBurger
          className='text-2xl cursor-pointer'
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Categories */}
      {isMenuOpen && (
        <div className='absolute top-12 left-0 w-1/2 bg-white shadow-md p-4 md:hidden z-50'>
          <ul className='flex flex-col space-y-3 cursor-pointer'>
            <li
              className='text-gray-700 hover:text-gray-900 transition-all duration-300'
              onClick={() => { handleCategoryChange(''); toggleMenu(); }}
            >
              All Products
            </li>
            <li
              className='text-gray-700 hover:text-gray-900 transition-all duration-300'
              onClick={() => { handleCategoryChange('Men'); toggleMenu(); }}
            >
              Men
            </li>
            <li
              className='text-gray-700 hover:text-gray-900 transition-all duration-300'
              onClick={() => { handleCategoryChange('Women'); toggleMenu(); }}
            >
              Women
            </li>
            <li
              className='text-gray-700 hover:text-gray-900 transition-all duration-300'
              onClick={() => { handleCategoryChange('Watches'); toggleMenu(); }}
            >
              Watches
            </li>
            <li
              className='text-gray-700 hover:text-gray-900 transition-all duration-300'
              onClick={() => { handleCategoryChange('Shoes'); toggleMenu(); }}
            >
              Shoes
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Categories


// <div className='group hidden md:block'>
// <ul className='flex justify-between items-center space-x-3 cursor-pointer '>
//   <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300' onClick={() => { handleCategoryChange('') }}>All Products</li>
//   <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Men') }}>Men</li>
//   <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Women') }}>Women</li>
//   <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Watches') }}>Watches</li>
//   <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Shoes') }}>Shoes</li>
// </ul>
// </div>
