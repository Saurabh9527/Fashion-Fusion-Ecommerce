import React, { useState } from 'react'
import logo from '../../assets/Logo.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import triangleLogo from '../../assets/Group.png'
import './Navbar.css'

const Navbar = () => {

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProfileOpen(false);
  };

  const handleLogo = () => {
    console.log("Logo clicked");
  }

  const handleProfile = () => {
    console.log("My Profile Clicked");
  }

  const handleLoginSignup = () => {
    console.log("Login Signup Clicked");
  }

  const handleCart = () => {
    console.log("Cart Clicked");
  }

  const handleWishList = () => {
    console.log("Wishlish Clicked");
  }

  return (
    <div>
      <div class="overflow-hidden pt-2">
        <div class="marquee whitespace-nowrap font-sans text-center text-slate-950 font-medium text-base flex gap-20">
         <span> Made in India | Cash on Delivery Available | Free Shipping on Orders Over ₹1099 | 100% Genuine Products | Easy, Hassle-Free Returns | Secure Payments | Quality Assured | Exclusive Deals & Discounts Await!
         </span>
         <span> Limited Time Offer: 10% Off on Your First Purchase | Sign Up for Exclusive Member Benefits | Unbeatable Deals Just for You!
         </span>
        </div>
      </div>
      <div className='flex justify-between items-center w-full min-h-[80px] shadow-md pt-0 p-3'
        onMouseLeave={handleMouseLeave}>
        <div>
          <img src={logo}
            alt="brand-logo"
            className='w-20 h-14 cursor-pointer ml-4'
            onClick={handleLogo} />
        </div>
        <div className='hidden cursor-pointer sm:flex'>
          <img
            src={triangleLogo}
            alt="traiangleLogo"
            className='w-10 h-8' />
          <img
            src={triangleLogo}
            alt="traiangleLogo"
            className='w-10 h-8'
          />
        </div>
        <div className='flex justify-between items-center space-x-5 mr-4'>
          <div
            className='relative'
            onMouseEnter={handleMouseEnter}
          >
            <FaRegUserCircle aria-label='Profile' className='size-8 text-slate-800 cursor-pointer hover:text-slate-900' />
            {isProfileOpen && (
              <div className='absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg w-32 py-2 z-10'>
                <button
                  className='block w-full text-left px-4 py-2 font-sans text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                  onClick={handleProfile}
                >
                  My Profile
                </button>
                <button
                  className='block w-full text-left px-4 py-2 font-sans text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                  onClick={handleLoginSignup}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
          <div
            className='relative cursor-pointer'
            onClick={handleCart}
          >
            <FaCartArrowDown
              aria-label='Cart'
              className='size-8 text-slate-800 hover:text-slate-900' />
            <div className='absolute top-[-5px] right-[-10px] bg-red-500  text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'
            >
              4
            </div>
          </div>
          <div>
            <FaHeart
              aria-label='Wishlist'
              className='size-8 text-slate-800 cursor-pointer hover:text-slate-900'
              onClick={handleWishList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
