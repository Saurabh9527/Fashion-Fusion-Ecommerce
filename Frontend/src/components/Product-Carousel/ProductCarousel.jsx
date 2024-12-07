
import React, { useRef } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductCarouselProduct from './ProductCarouselProduct';
import './ProductCarousel.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductCarousel = () => {

    const { products, loading, error } = useFetchProducts(1, 12);
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='mt-16 mr-[6px] ml-[6px] sm:mt-24 max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] sm:mx-auto'>
            <div className='flex flex-col'>
                <h2 className='text-center text-2xl font-medium font-roboto'>Best Sellers</h2>
                <div className="relative">
                    <IoIosArrowBack
                        className="absolute left-0 z-10 p-2 top-[45%] -translate-y-1/2 size-7 md:size-9 cursor-pointer bg-gray-200 rounded-full text-gray-800"
                        onClick={scrollLeft}
                      />
                    <div 
                    ref={carouselRef}
                    className='flex overflow-x-auto space-x-6 scrollbar-hide mt-8'>
                        {products.map((product) => (
                            <ProductCarouselProduct key={product._id} product={product} />
                        ))}
                    </div>

                    <IoIosArrowForward
                        className="absolute right-0 z-10 p-2 top-[45%] -translate-y-1/2 size-7 md:size-9 cursor-pointer bg-gray-200 rounded-full text-gray-800"
                        onClick={scrollRight}
                    />

                </div>
            </div>
        </div>
    )
}

export default ProductCarousel
