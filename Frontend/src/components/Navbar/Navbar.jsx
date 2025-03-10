import React, { useContext, useState } from 'react'
import logo from '../../assets/Logo.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import triangleLogo from '../../assets/Group.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthProvider';
import useCartProduct from '../../hooks/useCartProduct';

const Navbar = () => {

  useCartProduct();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { removeToken, cartProducts, getToken } = useContext(AuthContext)

  const token = getToken();

  const handleMouseEnter = () => {
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProfileOpen(false);
  };

  const handleLogo = () => {
    navigate('/home')
  }

  const handleProfile = () => {
    navigate('/profile');
  }

  const handleLoginSignup = () => {
    removeToken();
    navigate('/login');
  }

  // const handleCart = () => {
  //   console.log("Cart Clicked");
  // }

  const handleWishList = () => {
    navigate('/wishlist');
  }

  return (
    <div>
      <div className="overflow-hidden pt-2">
        <div className="marquee whitespace-nowrap font-sans text-center text-slate-950 font-medium text-base flex gap-20">
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
                  {token ? 'Logout' : 'Login'}
                </button>
              </div>
            )}
          </div>
          <Link to={'/cart'}
            className='relative cursor-pointer'
          >
            <FaCartArrowDown
              aria-label='Cart'
              className='size-8 text-slate-800 hover:text-slate-900' />
            {token &&
              <div className='absolute top-[-5px] right-[-10px] bg-red-500  text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'
              >
                {cartProducts.length}
              </div>}
          </Link>
          <div>
            <FaHeart
              aria-label='Wishlist'
              className='size-8 text-rose-600 cursor-pointer hover:text-rose-500'
              onClick={handleWishList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
