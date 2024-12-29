
import React from 'react'

const Register = () => {
  return (
    <div className='mb-5'>
      <form className="max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4">
        <h2 className='text-3xl font-roboto'>Create Account</h2>
        <div className="mb-5 mt-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium font-roboto">Your email</label>
          <input
            type="email"
            id="email"
            className="shadow-inner  border border-gray-300   block w-full p-2.5 rounded-lg outline-none"
            placeholder="name@fashionfusion.com"
            required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium font-roboto">Your password</label>
          <input
            type="password"
            id="password"
            className="shadow-inner  border border-gray-300  block w-full p-2.5 rounded-lg outline-none"
            required />
        </div>
        <div className="mb-5">
          <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium font-roboto">Confirm password</label>
          <input
            type="password"
            id="confirmpassword"
            className="shadow-inner  border border-gray-300  block w-full p-2.5 rounded-lg outline-none"
            required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded "
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-5">Verify your email id</button>
          <hr />
          <div className='text-sm font-medium text-customGray mt-5'>
            Already have an account?
            <span className='ml-2 hover:underline cursor-pointer text-sky-600'>Sign in</span>
            </div>
          
      </form>
    </div>
  )
}

export default Register
