
import React from 'react'

const SubscribeNewsletter = () => {

  // TODO create Submit functionality
  return (
    <div className='mt-12'>
      <h2 className=' sm:max-w-[80%] text-center mx-auto text-base sm:text-lg md:text-xl lg:text-3xl font-medium font-roboto '>Or Subscribe To The Newsletter</h2>
      <div className='mt-10 sm:max-w-[80%] mx-auto flex justify-between gap-4'>
        <input 
        type="email" 
        placeholder='Email Address...'
        className='px-2 border-b-[1.9px] border-gray-950 outline-none bg-slate-100 w-full hover:border-b-2'
        />
        <button className='border-b-[1.9px] border-gray-950 font-roboto px-2 hover:border-b-2'>SUBMIT</button>
      </div>
    </div>
  )
}

export default SubscribeNewsletter
