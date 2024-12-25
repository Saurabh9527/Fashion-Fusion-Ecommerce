
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductItem from '../../components/Products/ProductItem';
import Pagination from '../../components/Pagination/Pagination';

const CategoriesProducts = () => {
    const [pageNo, setPageNo] = useState(1);
    const { category } = useParams();
    const { products, loading, error, totalPages } = useFetchProducts(pageNo, 12, category);

    useEffect(() => {
        window.scrollTo(0, 0); 
        setPageNo(1);
    }, [category]);

    const handlePageChange = ( newPage ) =>{
        setPageNo(newPage)
    }

    return (
        <div className='flex flex-col mt-[60px] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto  rounded mb-10'>
            <div className='p-2 mt-4'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6' >
                    {
                        products.map((product) => (
                            <ProductItem key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>
            <Pagination pageNo={pageNo} onPageChange={handlePageChange} totalPages={totalPages}/>
        </div>
    )
}

export default CategoriesProducts