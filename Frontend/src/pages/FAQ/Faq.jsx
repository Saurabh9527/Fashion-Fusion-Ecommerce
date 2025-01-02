
import React, { useEffect, useState } from 'react'
import { faqCategories } from '../../utils/faqCategories';
import AccordionCategory from '../../components/Faq/AccordionCategory';

const Faq = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className=' ml-8 mr-8 custom4:max-w-[650px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[900px] custom4:mx-auto pt-16'>
                <p className='mb-5'>
                    Welcome to Fashion Fusion! Below, you'll find answers to common questions about our services, policies, and more. If you have additional queries, feel free to reach out to us.
                </p>
                <h2 className='text-lg font-medium mb-5'>Frequently Asked Questions (FAQ):</h2>
                {faqCategories.map((category) => (
                    <AccordionCategory key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default Faq
