
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiErrorWarningFill } from "react-icons/ri";
import axios from 'axios';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import { toast } from 'react-toastify';

const ForgotPassword = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

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
    }

    if(password !== confirmPassword){
      toast.error("Passwords do not match");
      return;
    }

    if (!isTermsChecked) {
      validationErrors.terms = 'You must agree to the terms and conditions.';
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const config = {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const { data } = await axios.post(`${API_ENDPOINT.POST.update_password}/updatePassword`, {
          email,
          password,
          confirmPassword
        }, config);

        if (data.success) {
          toast.success(data.message);
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          navigate('/login');
        } else {
          toast.error(data.message);
        }

      } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className='mb-5'>
      <form className="max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4">
        <h2 className='text-3xl font-roboto'>Update Password</h2>
        <div className="mb-5 mt-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium font-roboto">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
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
          <label htmlFor="password" className="block mb-2 text-sm font-medium font-roboto">New password</label>
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
        <div className="flex items-start mb-5">
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
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-2 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}>Update password
        </button>
        <div className='text-end mb-5 text-blue-600 hover:underline cursor-pointer text-sm font-medium'>Sign in</div>

        <div className="flex items-center space-x-1 mb-5">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">New to Fashionfusion?</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <div>
          <button className='border border-gray-200 shadow-md py-2 px-3 w-full rounded-lg hover:bg-gray-50 text-base font-normal'>Create your Fashionfusion account</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
