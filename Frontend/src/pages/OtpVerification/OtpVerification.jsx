
import React, { useRef, useState, useContext, useEffect } from 'react'
import AuthContext from '../../Context/AuthProvider';
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_ENDPOINT } from '../../apiClient/apiEndPoint';

const OtpVerification = () => {
  const [otpfields, setOtpFields] = useState(Array(6).fill(''));
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  let otpinputref = useRef([]);
  const { userEmail, setToken } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleOtp = (e, index) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    const singleDigitValue = numericValue.slice(0, 1);
    let copyotpfields = [...otpfields];
    copyotpfields[index] = singleDigitValue;
    if (index < otpfields.length - 1 && singleDigitValue) {
      otpinputref.current[index + 1].focus();
    }
    setOtpFields(copyotpfields);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      let copyotpfields = [...otpfields];
      copyotpfields[index] = '';
      setOtpFields(copyotpfields);
      if (index > 0) {
        otpinputref.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowRight' && index < otpfields.length - 1) {
      otpinputref.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      otpinputref.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (/^[0-9]*$/.test(pastedData)) {
      const copyotpfields = [...otpfields];
      for (let i = 0; i < copyotpfields.length; i++) {
        if (i < pastedData.length) {
          copyotpfields[i] = pastedData[i];
        } else {
          break;
        }
      }
      setOtpFields(copyotpfields);
    }
  };

  const handleCreateAcount = async () => {

    const allOtpFields = otpfields.every((field) => field !== '')
    if (allOtpFields) {
      try {
        setLoading(true);
        const config = {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const { data } = await axios.post(`${API_ENDPOINT.POST.verify_otp}/verifyOtp`, {
          otp: otpfields.join(''),
          email,
        }, config);
        if (data.success) {
          sessionStorage.removeItem('email', email);
          setToken(data?.data?.token);
          toast.success("Welcome to FashionFusion!");
          navigate('/home')
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error('Error submitting Otp:', error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } finally {
        setLoading(false)
      }
    } else {
      toast.error('Please enter all the OTP fields')
    }
  }

  const handleResendOtp = async () =>{

    try {

      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const { data } = await axios.post(`${API_ENDPOINT.POST.resent_otp}/resentOtp`, {
        email,
      }, config);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }  
    } catch (error) {
      console.error('Error resending Otp:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred. Please try again.');
      }   
    }
  }

  return (
    <div className='mb-5'>
      <div className='max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4'>
        <h2 className='text-3xl font-roboto mb-5'>Verify email id </h2>
        <p className='mb-8 font-roboto'>A email with a One Time Password (OTP) has been sent to your email id:</p>
        {email &&
          <h3
            className='font-medium mb-5'>{email}
            <span
              onClick={() => { navigate('/register') }}
              className='text-sky-800 hover:underline cursor-pointer'>Change</span>
          </h3>}
        <div className='flex justify-between'>
          <h2 className='font-roboto font-medium text-base'>Enter OTP:</h2>
          <h2
          onClick={handleResendOtp} 
          className='text-sky-800 hover:underline font-medium cursor-pointer'>Resend OTP</h2>
        </div>
        <div className='flex justify-between mt-1 mb-5'>
          {otpfields.map((_, index) => (
            <input
              key={index}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              ref={(el) => (otpinputref.current[index] = el)}
              onChange={(e) => handleOtp(e, index)}
              value={otpfields[index]}
              type="text"
              className='border w-11 h-11 p-2 text-center rounded-md'
            />
          ))}
        </div>

        <button
          onClick={handleCreateAcount}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-5 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
          disabled={loading}
          >Create your Fashionfusion account
        </button>
      </div>
    </div>
  )
}

export default OtpVerification