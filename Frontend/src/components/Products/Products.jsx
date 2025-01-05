
import React, { useState } from 'react'
import axios from 'axios';
import useFetchProducts from '../../hooks/useFetchProducts';
import useSearchProduct from '../../hooks/useSearchProduct';
import ProductItem from './ProductItem';
import Pagination from '../Pagination/Pagination';
import Categories from './Categories';

const Products = () => {
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { products: paginatedProducts, loading: paginatedLoading, error: paginatedError, totalPages: paginatedTotalPages } = useFetchProducts(pageNo, 8, category);
  const { products: searchProducts, loading: searchLoading, error: searchError, totalPages: searchTotalPages } = useSearchProduct(searchQuery);

  // TODO here not use API for earch product by searchquery instead use when user select suggestion from suggestion list


  const handleCategoryChange = (newCategory) => {
    setSearchQuery('')
    setCategory(newCategory);
    setPageNo(1);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCategory('');
    setPageNo(1);
  }

  const handlePageChange = (newPage) => {
    setPageNo(newPage)
  }

  const displayProducts = searchQuery ? searchProducts : paginatedProducts;
  const totalPages = searchQuery ? searchTotalPages : paginatedTotalPages;
  // console.log(displayProducts);

  return (
    <div className='flex flex-col mt-[60px] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto border border-zinc-100 rounded mb-10'>
      <div className='relative flex justify-between items-center p-2'>
        {/* Categories */}
        <Categories handleCategoryChange={handleCategoryChange} />

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
      <hr className='m-1'/>
      <div className='p-2 mt-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6' >
          {
            displayProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          }
        </div>
      </div>

      {/* Pagination */}
      <Pagination pageNo={pageNo} onPageChange={handlePageChange} totalPages={totalPages} />
    </div>
  )
}

export default Products
