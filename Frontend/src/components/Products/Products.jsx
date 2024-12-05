
import React, { useState } from 'react'
import axios from 'axios';
import useFetchProducts from '../../hooks/useFetchProducts';
import useSearchProduct from '../../hooks/useSearchProduct';
import ProductItem from './ProductItem';
import Pagination from '../Pagination/Pagination';

const Products = () => {
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { products: paginatedProducts, loading: paginatedLoading, error: paginatedError } = useFetchProducts(pageNo, 8, category);
  const { products: searchProducts, loading: searchLoading, error: searchError } = useSearchProduct(searchQuery);

  //  TODO create separate categories component for this categories
  // TODO here not use API for earch product by searchquery instead use when user select suggestion from suggestion list
  

  const handleCategoryChange = (newCategory) => {
    searchQuery('')
    setCategory(newCategory);
    setPageNo(1);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCategory('');
    setPageNo(1);
  }

  const handlePageChange = ( newPage ) => {
      setPageNo(newPage)
  }

  const displayProducts = searchQuery ? searchProducts : paginatedProducts;
  // console.log(displayProducts);

  return (
    <div className='flex flex-col mt-[60px] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto border border-zinc-300 rounded'>
      <div className='flex justify-between items-center p-2'>
        <div className='group hidden md:block'>
          <ul className='flex justify-between items-center space-x-3 cursor-pointer '>
            <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-300' onClick={() => { handleCategoryChange('') }}>All Products</li>
            <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Men') }}>Men</li>
            <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Women') }}>Women</li>
            <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Watches') }}>Watches</li>
            <li className='text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-700 transition-all duration-30' onClick={() => { handleCategoryChange('Shoes') }}>Shoes</li>
          </ul>
        </div>

          {/* SearchBox */}
        <input
          type="search"
          placeholder='Search products...'
          className='py-2 px-3 border border-gray-300 shadow-sm hover:shadow-md w-[300px] rounded-md outline-none text-gray-900'
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Cards */}
      </div>
      <div className='p-2 mt-4'>
        <div className='grid grid-cols-4 gap-x-5 gap-y-6' >
          {
            displayProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          }
        </div>
      </div>

      {/* Pagination */}
      <Pagination pageNo = {pageNo} onPageChange = {handlePageChange} />
    </div>
  )
}

export default Products
