
import React from 'react'
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductCarouselProduct from './ProductCarouselProduct';
import './ProductCarousel.css'

const ProductCarousel = () => {

    const { products, loading, error } = useFetchProducts(1, 12);

    return (
        <div className='mt-16 mr-[6px] ml-[6px] sm:mt-24 max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] sm:mx-auto'>
            <div className='flex flex-col'>
                <h2 className='text-center text-2xl font-medium font-roboto'>Best Sellers</h2>
                <div className='flex overflow-x-auto space-x-6 scrollbar-hide mt-8'>
                    {products.map(( product ) => (
                        <ProductCarouselProduct key={product._id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCarousel
