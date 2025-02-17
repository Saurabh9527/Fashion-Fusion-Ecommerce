
import React from 'react'
import icons_payment from '../../assets/icons_payment.png'

import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {

	const scrollOnTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		  });
	}

	const handleFacebookClick = () => {
		window.open('https://www.facebook.com/saurabh.niwate.7?mibextid=ZbWKwL');
	}

	const handleInstgramClick = () => {
		window.open("https://www.instagram.com/saurabh_niwate_/");
	  }

	  const handleGithubClick = () => {
        window.open('https://github.com/Saurabh9527');
    };

	return (
		<footer>
			<div className="px-4 mt-16 dark:text-gray-800">
				<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
					<div className="lg:w-1/3">
						<Link to={`/home`} className="flex justify-center space-x-3 lg:justify-start">
							<span className="self-center text-3xl font-semibold hover:underline">FASHION FUSION</span>
						</Link>
					</div>
					<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
						<div className="space-y-3">
							<h3 className="tracking-wide uppercase font-medium dark:text-gray-900">CATALOG</h3>
							<ul className="space-y-1">
								<li>
									<Link to={`/categories/${'men'}`}>Men</Link>
								</li>
								<li>
									<Link to={`/categories/${'women'}`}>Women</Link>
								</li>
								<li>
									<Link to={`/categories/${'watches'}`}>Watches</Link>
								</li>
								<li>
									<Link to={`/categories/${'shoes'}`}>Shoes</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<h3 className="tracking-wide uppercase dark:text-gray-900 font-medium">ABOUT US</h3>
							<ul className="space-y-1">
								<li>
									<Link to={`/faq`}>FAQ</Link>
								</li>
								<li>
									<Link to={`/about`}>About Us</Link>
								</li>
								<li>
									<Link to={`/terms-conditions`}>Terms & Conditions</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<h3 className="uppercase dark:text-gray-900 font-medium">CUSTOMER SERVICES</h3>
							<ul className="space-y-1">
								<li>
									<Link to={`/contact`}>Contact Us</Link>
								</li>
								<li>
									<Link to={`/orders`}>Track Your Order</Link>
								</li>
								<li>
									<Link to={``}>Shipping and Returns</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<div className="uppercase dark:text-gray-900 font-medium">Social media</div>
							<div className="flex justify-start space-x-3">
								<div  title="Facebook" className="flex items-center p-1">
									<svg 
									xmlns="http://www.w3.org/2000/svg" 
									fill="currentColor" 
									viewBox="0 0 32 32" 
									className="w-5 h-5 fill-current cursor-pointer"
									onClick={handleFacebookClick}>
										<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
									</svg>
								</div>
								<div  title="GitHub" className="flex items-center p-1">
									<svg 
									viewBox="0 0 24 24" 
									xmlns="http://www.w3.org/2000/svg" 
									className="w-5 h-5 fill-current cursor-pointer"
									onClick={handleGithubClick}>
										<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.11-.774.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.048.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.654.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.806 5.625-5.48 5.92.43.37.815 1.1.815 2.22 0 1.604-.015 2.896-.015 3.286 0 .32.19.694.8.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z"></path>
									</svg>
								</div>
								<div  title="Instagram" className="flex items-center p-1">
									<svg 
									xmlns="http://www.w3.org/2000/svg" 
									viewBox="0 0 32 32" fill="currentColor" 
									className="w-5 h-5 fill-current cursor-pointer"
									onClick={handleInstgramClick}>
										<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full bg-gray-800'>
				<div className="flex flex-col sm:flex-row items-center justify-between max-w-[500px] sm:max-w-[575px] md:max-w-[650px] mx-auto pt-6 sm:pb-2 text-sm  dark:text-gray-200 mt-8">
					<span className='order-2 sm:order-1 mb-2'>© 2024 Fashion Fusion, Inc. All rights reserved.</span>
					<img
						src={icons_payment}
						alt="icons_payment"
						className='order-1 sm:order-2 mb-2 sm:mb-0'
					/>
				</div>
				<div className='fixed bottom-2 right-4'>
					<FaArrowAltCircleUp
						className='text-3xl text-gray-200 hover:text-gray-300 cursor-pointer'
						onClick={scrollOnTop} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
