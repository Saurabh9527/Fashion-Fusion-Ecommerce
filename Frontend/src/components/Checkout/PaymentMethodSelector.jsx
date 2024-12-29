
import React, { useState } from 'react'
import { paymentOptions } from '../../utils/paymentIcons'
import { banks } from '../../utils/netBankingBanks';

const PaymentMethodSelector = () => {

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelection = (e) => {
    setSelectedMethod(e.target.value);
  }

  return (
    <div>
      <div className='border border-gray-200 shadow mt-5 p-3'>
        <h3 className='font-bold font-sans text-xl'>Payment Method</h3>

        <div className="mt-3 ml-3 mb-5 border border-gray-200 rounded-md p-4 flex flex-col space-y-4 ">

          <div
            className={`flex p-3 rounded-md ${selectedMethod === "card" ? "bg-red-50" : "bg-white"
              }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              id="card"
              className="mr-2"
              onChange={handleSelection}
            />
            <div className='flex flex-col ml-2'>
              <label htmlFor="card">
                <h2 className='text-base font-semibold'>Credit or Debit Card</h2>
              </label>
              <div className='flex flex-wrap space-x-2 mt-4'>
                {
                  paymentOptions.map((option) => (
                    <img
                      key={option.id}
                      src={option.image}
                      alt='payment-options'
                      className='w-[45px] h-[29px] '
                    />
                  ))
                }
              </div>
            </div>
          </div>

          <div className={`flex p-3 rounded-md ${selectedMethod === "netBanking" ? "bg-red-50" : "bg-white"
            }`}>
            <input
              type="radio"
              name="paymentMethod"
              value="netBanking"
              id="netBanking"
              className="mr-2"
              onChange={handleSelection}
            />
            <div className='flex flex-col ml-2'>
              <label htmlFor="netBanking">
                <h2 className='text-base font-semibold'>Net Banking</h2>
              </label>
              <div className='flex flex-wrap space-x-2 mt-4'>
                {
                  <select 
                  className='border rounded-lg p-1 outline-none shadow  bg-gray-50'
                  defaultValue=""
                  >
                    <option selected 
                    className='font-roboto'>
                      Choose an Option
                    </option>
                    {banks.map((bank) => (
                      <option
                        key={bank.id}
                        value={bank.name}
                        className='py-1'>{bank.name}
                      </option>
                    ))}
                  </select>
                }
              </div>
            </div>
          </div>

          <div className={`flex p-3 rounded-md ${selectedMethod === "upi" ? "bg-red-50" : "bg-white"
            }`}>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              id="upi"
              className="mr-2"
              onChange={handleSelection}
            />
            <div className='flex flex-col ml-2'>
              <label htmlFor="upi">
                <h2 className='text-base font-semibold'>Other UPI Apps</h2>
              </label>
              { selectedMethod === 'upi' &&
                <div className='flex flex-wrap space-x-2 mt-4'>
                <div className='flex flex-col custom3:flex-row gap-2'>
                  <input
                    type="text"
                    placeholder='Enter UPI ID'
                    required
                    className='border outline-none py-2 px-2 rounded-md bg-gray-50 shadow' />
                  <button className='border border-gray-400 rounded-full px-2 py-1 w-fit bg-yellow-100 hover:bg-yellow-200'>Verify</button>
                </div>
              </div>}
            </div>
          </div>

          <div className={`flex p-3 rounded-md ${selectedMethod === "cashOnDelivery" ? "bg-red-50" : "bg-white"
            }`}>
            <input
              type="radio"
              name="paymentMethod"
              value="cashOnDelivery"
              id="cashOnDelivery"
              className="mr-2"
              onChange={handleSelection}
            />
            <div className='flex flex-col ml-2'>
              <label htmlFor="cashOnDelivery">
                <h2 className='text-base font-semibold'>Cash on Delivery/Pay on Delivery</h2>
              </label>
              {
                selectedMethod==='cashOnDelivery' &&
                <p 
                className='text-green-800 font-medium text-sm'>Scan & Pay at delivery with Fashionfusion Pay UPI and get cashback up to ₹10.</p>
              }
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaymentMethodSelector
