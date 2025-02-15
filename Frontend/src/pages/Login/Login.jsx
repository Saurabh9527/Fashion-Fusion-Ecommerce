import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import { toast } from 'react-toastify';
import AuthContext from '../../Context/AuthProvider';
import { RiErrorWarningFill } from "react-icons/ri";
import axios from 'axios';
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext)

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

    if (!isTermsChecked) {
      validationErrors.terms = 'You must agree to the terms and conditions.';
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Perform the form submission logic, e.g., send data to the server
      try {
        setLoading(true);
        const config = {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const { data } = await axios.post(`${API_ENDPOINT.POST.login}/login`, {
          email,
          password,
        }, config);

        if (data.success) {
          toast.success(data.message);
          setToken(data?.data?.token)
          setEmail('')
          setPassword('')
          navigate('/home');
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

  const handleCreateNewAccount = () => {
    navigate('/register')
  }

  const handleGuestUser = () => {
    setEmail("fashionfusionguest@gmail.com")
    setPassword('1234')
  }

  return (
    <div className='mb-5'>
      <form className="max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4">
        <h2 className='text-3xl font-roboto'>Sign in</h2>
        <div className="mb-5 mt-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium font-roboto">Your email</label>
          <input
            type="email"
            id="email"
            className="shadow-inner  border border-gray-300   block w-full p-2.5 rounded-lg outline-none"
            placeholder="name@fashionfusion.com"
            value={email}
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
        <div className="relative mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium font-roboto">Your password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              className="shadow-inner border border-gray-300 block w-full p-2.5 rounded-lg outline-none pr-10"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showPassword ? <BiHide className="size-5 text-gray-950" /> : <BiShow className="size-5 text-gray-950" />}
            </button>
          </div>
          {errors.password &&
            <div className='flex items-center mt-2 space-x-1'>
              <RiErrorWarningFill className='size-5 mt-[2px] text-red-600' />
              <p className="text-red-600 text-sm">{errors.password}</p>
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
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-2 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
          disabled={loading}
        >{loading ? 'Submitting...' : 'Sign in'}
        </button>
        <div className='flex justify-between'>
          <div
            className='text-end mb-5 text-blue-600 hover:underline cursor-pointer text-sm font-medium'
            onClick={handleGuestUser}>Guest User
          </div>
          <div
            className='text-end mb-5 text-blue-600 hover:underline cursor-pointer text-sm font-medium'
            onClick={() => navigate('/updatePassword')}>Forgot password
          </div>
        </div>
        <div className="flex items-center space-x-1 mb-5">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">New to Fashionfusion?</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <div>
          <button className='border border-gray-200 shadow-md py-2 px-3 w-full rounded-lg hover:bg-gray-50 text-base font-normal'
            onClick={handleCreateNewAccount}>Create your Fashionfusion account</button>
        </div>
      </form>
    </div>
  )
}

export default Login
