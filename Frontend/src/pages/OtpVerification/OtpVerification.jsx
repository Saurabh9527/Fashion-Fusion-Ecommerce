
import React, { useRef, useState } from 'react'

const OtpVerification = () => {
  const [otpfields, setOtpFields] = useState(Array(6).fill(''));
  let otpinputref = useRef([]);

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

  return (
    <div className='mb-5'>
      <div className='max-w-sm mx-auto mt-10 border border-gray-200 shadow-sm rounded-lg p-4'>
        <h2 className='text-3xl font-roboto mb-5'>Verify mobile number</h2>
        <p className='mb-8 font-roboto'>A text with a One Time Password (OTP) has been sent to your email id:</p>
        <h3
          className='font-medium mb-5'>9322354850 <span className='text-sky-800 hover:underline cursor-pointer'>Change</span>
        </h3>
        <div className='flex justify-between'>
          <h2 className='font-roboto font-medium text-base'>Enter OTP:</h2>
          <h2 className='text-sky-800 hover:underline font-medium cursor-pointer'>Resend OTP</h2>
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mb-5">Create your Fashionfusion account
        </button>
      </div>
    </div>
  )
}

export default OtpVerification