import React, { useEffect, useState } from 'react';

const OffersCarousel = () => {
    const offersImages = [
        "https://assets.ajio.com/cms/AJIO/WEB/1440x128%202pay.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/Federal%20Bank-1440x128-without%20CTArevised1.jpg",
        "https://images-static.nykaa.com/uploads/eb609159-aa99-4a5e-9feb-ed0248f90d97.jpg?tr=cm-pad_resize,w-1800",
        "https://assets.ajio.com/cms/AJIO/WEB/01042024-mobikwik-1440x128.jpg",
        "https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1800",
        "https://assets.ajio.com/cms/AJIO/WEB/1440x128-1109.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offersImages.length);
        }, 2000);
        
        return () => clearInterval(interval);
    }, [offersImages.length]);

    return (
        <div className="relative mt-[40px] lg:mt-[60px] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto overflow-hidden">
            <div className="relative h-[100px]">
                {offersImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    >
                        <img
                            src={image}
                            className=""
                            alt={`Offer ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OffersCarousel;
