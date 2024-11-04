
import React, { Profiler } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts';
import { Link } from 'react-router-dom';
const ProductShowcase = () => {
    const { products, loading, error } = useFetchProducts(1, 5);

    if (loading) return <p>Loading...</p>; //TODO show shimmer UI
    if (error) return <p>Error: {error}</p>;  //TODO show error page or handle in error boundary 

    const firstProduct = products[0];
    const nextTwoProducts = products.slice(1, 3);
    const lastTwoProducts = products.slice(3, 5);
    console.log(firstProduct);
    return (
        <div className='flex flex-col lg:flex-row mt-[60px] max-w-[900px] xl:max-w-[1200px] mx-auto gap-8'>
            <div className=" w-[70%] h-[70%] md:h-full md:w-full flex justify-center mx-auto">
                <Link to={`/product/${firstProduct._id}`}>
                    <img src={firstProduct?.thumbnail} alt={firstProduct?.name} className="h-full w-full object-cover"/>
                </Link>
            </div>

            <div className='flex gap-8 justify-center w-[70%] h-[70%] md:h-full md:w-full mx-auto'>
                <div className='flex flex-col gap-8'>
                <Link to={`/product/${nextTwoProducts[0]._id}`}>
                    <img src={nextTwoProducts[0]?.thumbnail} alt={nextTwoProducts[0]?.name} className='w-full h-full object-cover'/>
                </Link>
                <Link to={`/product/${nextTwoProducts[1]._id}`}>
                    <img src={nextTwoProducts[1]?.thumbnail} alt={nextTwoProducts[1]?.name} className='w-full h-full object-cover'/>
                </Link>
                </div>

                <div className='flex flex-col gap-8'>
                <Link to={`/product/${lastTwoProducts[0]._id}`}>
                    <img src={lastTwoProducts[0]?.thumbnail} alt={lastTwoProducts[0]?.name} className='w-full h-full object-cover'/>
                </Link>
                <Link to={`/product/${lastTwoProducts[1]._id}`}>
                    <img src={lastTwoProducts[1]?.thumbnail} alt={lastTwoProducts[1]?.name} className='w-full h-full object-cover'/>
                </Link>
                </div>

            </div>

        </div>
    )
}

export default ProductShowcase
