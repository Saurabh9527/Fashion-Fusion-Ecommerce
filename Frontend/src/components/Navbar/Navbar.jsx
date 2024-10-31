import React, { useState } from 'react'
import logo from '../../assets/Logo.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

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
    <div className='flex justify-between items-center w-full min-h-[80px] bg-slate-50 shadow-md p-3'
    onMouseLeave={handleMouseLeave}>
      <div>
        <img src={logo} 
        alt="brand-logo" 
        className='w-20 h-14 cursor-pointer ml-4'
        onClick={handleLogo}/>
      </div>
      <div className='flex justify-between items-center space-x-5 mr-4'>
        <div 
        className='relative'
        onMouseEnter={handleMouseEnter}
        >
          <FaRegUserCircle aria-label='Profile' className='size-8 text-slate-800 cursor-pointer hover:text-slate-900'/>
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
          className='size-8 text-slate-800 hover:text-slate-900'/>
          <div className='absolute top-[-5px] right-[-10px] bg-red-500  text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'
          >
            4
          </div>
        </div>
        <div>
          <FaHeart 
          aria-label='Wishlist' 
          className='size-8 text-slate-800 cursor-pointer hover:text-slate-900'
          onClick={handleWishList}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
