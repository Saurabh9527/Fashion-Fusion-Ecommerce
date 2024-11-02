import React, { useEffect, useState } from 'react'

const BrandBannerCarousel = () => {
  const images = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01112024-MainBanners-Z1-P7-Accessorizelondon-Linoperros-min50.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/Nov24/1200X600_999._CB542292948_.jpg",
    "https://getketchadmin.getketch.com/sale/1717762313With%20out%20him%20and%20her.webp",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/GW/OCT/BAU/Set4/PC_GW_Hero_3000x1200_3._CB542131267_.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
      if (!isHovered) {
          const interval = setInterval(() => {
              setCurrentIndex((currentIndex + 1) % images.length);
          }, 2000);
          return () => clearInterval(interval);
      }
  }, [currentIndex, isHovered, images.length]);

  const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
      setCurrentIndex(index);
  };


  return (
    <div
      id="default-carousel"
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={handlePrev}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  
  )
}

export default BrandBannerCarousel
