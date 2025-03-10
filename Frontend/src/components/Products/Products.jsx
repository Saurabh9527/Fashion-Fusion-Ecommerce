
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import useFetchProducts from '../../hooks/useFetchProducts';
// import useSearchProduct from '../../hooks/useSearchProduct';
// import ProductItem from './ProductItem';
// import Pagination from '../Pagination/Pagination';
// import Categories from './Categories';

// const Products = () => {
//   const [pageNo, setPageNo] = useState(1);
//   const [category, setCategory] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const { products: paginatedProducts, loading: paginatedLoading, error: paginatedError, totalPages: paginatedTotalPages } = useFetchProducts(pageNo, 8, category);
//   const { products: searchProducts, loading: searchLoading, error: searchError, totalPages: searchTotalPages } = useSearchProduct(searchQuery);

//   // TODO here not use API for earch product by searchquery instead use when user select suggestion from suggestion list


//   const handleCategoryChange = (newCategory) => {
//     setSearchQuery('')
//     setCategory(newCategory);
//     setPageNo(1);
//   }

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     setCategory('');
//     setPageNo(1);
//   }

//   const handlePageChange = (newPage) => {
//     setPageNo(newPage)
//   } 

//   const displayProducts = searchQuery ? searchProducts : paginatedProducts;
//   const totalPages = searchQuery ? searchTotalPages : paginatedTotalPages;
//   // console.log(displayProducts);

//   return (
//     <div className='flex flex-col mt-[60px] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto border border-zinc-100 rounded mb-10'>
//       <div className='relative flex justify-between items-center p-2'>
//         {/* Categories */}
//         <Categories handleCategoryChange={handleCategoryChange} />

//         {/* SearchBox */}
//         <input
//           type="search"
//           placeholder='Search products...'
//           className='py-2 px-3 border border-gray-300 shadow-sm hover:shadow-md w-[300px] rounded-md outline-none text-gray-900'
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />

//         {/* Cards */}
//       </div>
//       <hr className='m-1'/>
//       <div className='p-2 mt-4'>
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6' >
//           {
//             displayProducts.map((product) => (
//               <ProductItem key={product._id} product={product} />
//             ))
//           }
//         </div>
//       </div>

//       {/* Pagination */}
//       <Pagination pageNo={pageNo} onPageChange={handlePageChange} totalPages={totalPages} />
//     </div>
//   )
// }

// export default Products


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useFetchProducts from '../../hooks/useFetchProducts';
import useSearchProduct from '../../hooks/useSearchProduct';
import Pagination from '../Pagination/Pagination';
import Categories from './Categories';
import { suggetionList } from '../../utils/suggetionsResult';
import getHighlightText from '../../utils/getHighlightText.jsx';
import ProductsShimmerUI from '../../ShimmerUI/ProductsShimmerUI/ProductsShimmerUI.jsx';
import ProductItem from './ProductItem/ProductItem.jsx';

const Products = () => {
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const { products: paginatedProducts, loading: paginatedLoading, error: paginatedError, totalPages: paginatedTotalPages } = useFetchProducts(pageNo, 8, category);
  const { products: searchProducts, loading: searchLoading, error: searchError, totalPages: searchTotalPages } = useSearchProduct(search);


  // if(paginatedLoading){
  //   return <div><ProductsShimmerUI /></div>
  // }
  const handleCategoryChange = (newCategory) => {
    setSearchQuery('')
    setSearch('')
    setCategory(newCategory);
    setPageNo(1);
  }

  const handleSearchChange = (e) => {
    const query = e.target.value;

    if(query === ""){
      setSuggestions([]);
      setPageNo(1);
      setCategory('');
      setSearch('')
      return;
    }

    setSearch(query);
    setSearchQuery(query);
    if (query) {
      const filteredSuggestions = suggetionList.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion.name);
    setSearchQuery(suggestion.name);
    setSuggestions([]);
    setPageNo(1);
    //setCategory('');
  };

  const handlePageChange = (newPage) => {
    setPageNo(newPage)
  }

  const displayProducts = search ? searchProducts : paginatedProducts;
  const totalPages = search ? searchTotalPages : paginatedTotalPages;

  return (
    <div className='flex flex-col mt-[60px] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto border border-zinc-100 rounded mb-10'>
      <div className='relative flex justify-between items-center p-2'>
        {/* Categories */}
        <Categories handleCategoryChange={handleCategoryChange} />

        {/* SearchBox */}
        <div className='relative'>
        <input
          type="search"
          placeholder='Search products...'
          className='py-2 px-3 border border-gray-300 shadow-sm hover:shadow-md w-[300px] rounded-md outline-none text-gray-900'
          value={search}
          onChange={handleSearchChange}
        />

        {suggestions.length > 0 && (
          <div className="absolute bg-white border border-gray-300 w-[300px] mt-1 rounded-md shadow-lg z-50">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {getHighlightText (suggestion.name, searchQuery)}
              </div>
            ))}
          </div>
        )}
        </div>

        {/* Cards */}
      </div>
      <hr className='m-1' />
      <div className='p-2 mt-4'>
        {
          paginatedLoading ? (
            <ProductsShimmerUI/>
          )
          : 
          (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6' >
            {
              displayProducts.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
            }
          </div>
          )
        }
      </div>

      {/* Pagination */}
      <Pagination pageNo={pageNo} onPageChange={handlePageChange} totalPages={totalPages} />
    </div>
  )
}

export default Products

