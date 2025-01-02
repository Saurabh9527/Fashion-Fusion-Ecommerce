
import React from 'react'
import AccordionItem from './AccordionItem/AccordionItem'

const AccordionCategory = ({category}) => {
  return (
    <div>
        <h2 className='text-xl font-medium mb-2 mt-4'>{category.category}:</h2>
        {category.faqs.map((faq)=>(
            <AccordionItem key={faq.id} faq={faq}/>
        ))}
    </div>
  )
}

export default AccordionCategory