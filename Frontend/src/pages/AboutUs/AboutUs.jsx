
import React, { useEffect } from 'react'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='relative'>
                <img src="https://images.unsplash.com/photo-1529873597343-8dd8429aa148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8"
                    alt=""
                    className=' w-full h-[400px] pt-1 ' />

                <div className='ml-8 mr-8 custom:max-w-[800px] custom:mx-auto absolute top-[16%] left-0 right-0'>
                    <h2 className='text-center text-3xl custom3:text-5xl mb-2 font-semibold '>About Us</h2>
                    <h2 className='text-center text-2xl custom3:text-4xl font-bold mb-5 text-orange-500'>Welcome to Fashion Fusion!</h2>
                    <p className='text-sm sm:text-lg text-gray-100'>At Fashion Fusion, we blend style, quality, and affordability to bring you the latest trends in fashion. Whether you're looking for chic casual wear, elegant formal attire, or statement accessories, we've got something for everyone. Our mission is to make fashion accessible, empowering you to express your unique style with confidence.</p>
                </div>
            </div>

            <div className=' sm:max-w-[600px] md:max-w-[750px] mx-auto mt-14 sm:mt-16'>
            <h3 className='text-3xl font-semibold mb-5 text-center' >Who We Are</h3>
                <div className='flex flex-col sm:flex-row ml-5 mr-5 sm:ml-0 sm:mr-0'>
                    <div className='sm:min-w-[300px] md:min-w-[400px] order-2 sm:order-1'>
                        <img src="https://media.istockphoto.com/id/639245982/photo/senior-african-american-woman-shopping-in-a-clothng-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=r8L-6JKW2rf8heXGDhgazmlqw2NusQYpN3ONSbjBROk=" 
                        alt="" 
                        className='w-full h-full object-cover rounded-md'/>
                    </div>
                    <div className=' sm:ml-4 p-1 order-1 sm:order-2 mb-4 sm:mb-0'> 
                        <p className='text-customGray'>Founded with a passion for fashion, Fashion Fusion is your one-stop destination for all things trendy. We believe that fashion is not just about clothing—it's about self-expression and embracing individuality. Our carefully curated collections reflect the perfect balance of timeless classics and modern designs.</p>
                    </div>
                </div>

                <div className='mt-20 mb-10'>
                <h3 className='text-3xl font-semibold mb-5 text-center' >What We Offer</h3>
                <div className='flex flex-col sm:flex-row ml-5 mr-5 sm:ml-0 sm:mr-0'>
                    <div className=' sm:ml-4 p-1  mb-4 sm:mb-0'> 
                        <p className='text-customGray'>Fashion Fusion offers a diverse range of products, from everyday essentials to bold statement pieces, catering to your unique style. Every item is crafted with exceptional quality, ensuring durability and elegance. Believing that great style should be accessible, we deliver high-quality collections at affordable prices. </p>
                    </div>

                    <div className=' h-[368px] max-w-[552px] sm:min-w-[300px] md:min-w-[400px] sm:h-[224px] md:h-[266px] 1'>
                        <img src="https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzJTIwY2xvdGhzfGVufDB8fDB8fHww" 
                        alt="" 
                        className='w-full h-full object-cover rounded-md'/>
                    </div>
                </div>
                </div>

                <div className='mt-16 ml-5 mr-5 sm:ml-0 sm:mr-0'>
                    <h2 className='text-3xl font-semibold text-center mb-2'>Our Vision</h2>
                    <p className='text-customGray'>To become a global leader in online fashion retail, creating a seamless shopping experience where style meets convenience.</p>
                </div>

                <div className='mt-16 ml-5 mr-5 sm:ml-0 sm:mr-0'>
                    <h2 className='text-3xl font-semibold text-center mb-2'>Our Mission</h2>
                    <p className='text-customGray'>To provide high-quality fashion that inspires confidence and self-expression. To offer exceptional customer service that ensures a hassle-free shopping experience. To promote sustainability by sourcing eco-friendly materials and practices.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs