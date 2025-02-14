
import React, { useContext, useState, useEffect } from 'react'
import { RiErrorWarningFill } from "react-icons/ri";
import axios from 'axios';
import AuthContext from '../../Context/AuthProvider';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setUserEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

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
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const { data } = await axios.post(`${API_ENDPOINT.POST.signup}/signup`, {
          email,
          password,
          confirmPassword
        }, config);

        if (data.success) {
          sessionStorage.setItem('email', email);
          setUserEmail(email);
          toast.success(data.message);
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          navigate('/verify-otp');
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
      <form
        className="max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4">
        <h2 className='text-3xl font-roboto'>Create Account</h2>
        <div className="mb-5 mt-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium font-roboto">Your email</label>
          <input
            type="email"
            value={email}
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

        <div className="relative  mb-5">
          <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium font-roboto">Confirm password</label>
          <div className='relative'>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              className="shadow-inner  border border-gray-300  block w-full p-2.5 rounded-lg outline-none"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors({ ...errors, confirmPassword: '' });
              }}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirmPassword ? <BiHide className="size-5 text-gray-950" /> : <BiShow className="size-5 text-gray-950" />}
            </button>
          </div>
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
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-5 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Verify your email id'}
        </button>
        <hr />
        <div className='text-sm font-medium text-customGray mt-5'>
          Already have an account?
          <span
            onClick={() => navigate('/login')}
            className='ml-2 hover:underline cursor-pointer text-sky-600'>Sign in</span>
        </div>
      </form>
    </div>
  )
}

export default Register
