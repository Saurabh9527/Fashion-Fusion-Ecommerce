
import React, { useContext, useState } from 'react'
import { RiErrorWarningFill } from "react-icons/ri";
import axios from 'axios';
import AuthContext from '../../Context/AuthProvider';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const { setUserEmail } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email.';
    }

    if (!password) {
      validationErrors.password = 'Please enter your password.';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!isTermsChecked) {
      validationErrors.terms = 'You must agree to the terms and conditions.';
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Perform the form submission logic, e.g., send data to the server
      try {
        setLoading(true);
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const response = await axios.post(`${API_ENDPOINT.POST.signup}/signup`, {
          email,
          password,
          confirmPassword
        }, config);

        console.log(response);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }

  }

  return (
    <div className='mb-5'>
      <form
        className="max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4">
        <h2 className='text-3xl font-roboto'>Create Account</h2>
        <div className="mb-5 mt-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium font-roboto">Your email</label>
          <input
            type="email"
            id="email"
            className="shadow-inner  border border-gray-300   block w-full p-2.5 rounded-lg outline-none"
            placeholder="name@fashionfusion.com"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: '' });
            }}
          />
          {errors.email &&
            <div className='flex items-center mb-5 space-x-1'>
              <RiErrorWarningFill className='size-5 mt-[2px] text-red-600' />
              <p className="text-red-600 text-sm">{errors.email}</p>
            </div>
          }
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium font-roboto">Your password</label>
          <input
            type="password"
            id="password"
            className="shadow-inner  border border-gray-300  block w-full p-2.5 rounded-lg outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: '' });
            }}
          />
          {errors.password &&
            <div className='flex items-center mb-5 space-x-1'>
              <RiErrorWarningFill className='size-5 mt-[2px] text-red-600' />
              <p className="text-red-600 text-sm">{errors.password}</p>
            </div>
          }
        </div>
        <div className="mb-5">
          <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium font-roboto">Confirm password</label>
          <input
            type="password"
            id="confirmpassword"
            className="shadow-inner  border border-gray-300  block w-full p-2.5 rounded-lg outline-none"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({ ...errors, confirmPassword: '' });
            }}
          />
          {errors.confirmPassword &&
            <div className='flex items-center mb-5 space-x-1'>
              <RiErrorWarningFill className='size-5 mt-[2px] text-red-600' />
              <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
            </div>
          }
        </div>
        <div className="flex items-start mb-2">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={isTermsChecked}
              onChange={(e) => {
                setIsTermsChecked(e.target.checked);
                setErrors({ ...errors, terms: '' });
              }}
              className="w-4 h-4 border border-gray-300 rounded "
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
          </label>
        </div>
        {errors.terms &&
          <div className='flex items-center mb-5 space-x-1'>
            <RiErrorWarningFill className='size-5 mt-[2px] text-red-600' />
            <p className="text-red-600 text-sm">{errors.terms}</p>
          </div>
        }
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-5">
          {loading ? 'Submitting...' : 'Verify your email id'}
        </button>
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
