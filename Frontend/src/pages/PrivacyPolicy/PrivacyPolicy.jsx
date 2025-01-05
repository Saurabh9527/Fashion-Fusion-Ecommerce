
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
    const navigate = useNavigate();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  return (
    <div>
        <div className='mr-5 ml-5 md:max-w-[650px] lg:max-w-[850px] md:mx-auto mt-14'>
            <h2 className='text-3xl font-medium mb-5'>Fashion Fusion.in Privacy Notice</h2>
            <p className='font-sans mb-5'>Welcome to Fashion Fusion! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or make a purchase from our website ("Website").</p>
            <hr className='mb-3 border'/>
            <h3 className='font-medium mb-5'>Last updated: January 20, 2025.</h3>
            <h2 className='text-xl font-medium mb-5'>1. Information We Collect</h2>
            <h3 className='font-medium mb-3'>a. Personal Information</h3>
            <p className='mb-2'>When you create an account, place an order, or interact with our Website, we may collect personal information such as:</p>
            <ul className='ml-10 mb-5'>
                <li className='list-disc'>Name</li>
                <li className='list-disc'>Email address</li>
                <li className='list-disc'>Phone number</li>
                <li className='list-disc'>Billing and shipping addresses</li>
                <li className='list-disc'>Payment information (e.g., credit/debit card details)</li>
            </ul>
            <h3 className='font-medium mb-3'>b. Non-Personal Information</h3>
            <p className='mb-2'>We may collect non-identifiable information through cookies and similar technologies, including:</p>
            <ul className='ml-10 mb-5'>
                <li className='list-disc'>IP address</li>
                <li className='list-disc'>Browser type and version</li>
                <li className='list-disc'>Operating system</li>
                <li className='list-disc'>Pages viewed and time spent on our Website</li>
                <li className='list-disc'>Referral source (e.g., search engines, advertisements)</li>
            </ul>
            <h2 className='text-xl font-medium mb-4'>2. How We Use Your Information</h2>
            <p className='mb-2'>We use your information for the following purposes:</p>
            <ul className='ml-10 mb-5'>
                <li className='list-disc'>To process and fulfill your orderss</li>
                <li className='list-disc'>To improve your shopping experience</li>
                <li className='list-disc'>To send order confirmations and updates</li>
                <li className='list-disc'>To provide customer support</li>
                <li className='list-disc'>To send promotional emails, newsletters, or special offers (you can opt out at any time)</li>
                <li className='list-disc'>To comply with legal and regulatory requirements</li>
            </ul>
            <h2 className='text-xl font-medium mb-4'>3. Sharing Your Information</h2>
            <p className='mb-2'>We do not sell or rent your personal information. However, we may share your data with:</p>
            <ul className='ml-10 mb-5'>
                <li className='list-disc'>Service Providers: Third-party companies that assist with payment processing, shipping, and marketing.</li>
                <li className='list-disc'>Legal Authorities: When required to comply with applicable laws, regulations, or legal processes.</li>
            </ul>
            <h2 className='text-xl font-medium mb-4'>4. Cookies and Tracking Technologies</h2>
            <p className='mb-2'>We use cookies and similar technologies to:</p>
            <ul className='ml-10 mb-5'>
                <li className='list-disc'>Enhance your browsing experience</li>
                <li className='list-disc'>Save your preferences</li>
                <li className='list-disc'>Analyze Website traffic and performance</li>
            </ul>
            <p className='mb-5'>You can manage or disable cookies through your browser settings, but this may affect your ability to use certain features of our Website.</p>
            <h2 className='text-xl font-medium mb-4'>5. Data Security</h2>
            <p className='mb-5'>We implement industry-standard security measures to protect your personal information, including encryption and secure server technologies. However, no method of transmission over the internet is 100% secure.</p>
            <h2 className='text-xl font-medium mb-4'>6. Your Rights</h2>
            <p className='mb-2'>You have the right to:</p>
            <ul className='ml-10 mb-5'>
                <li className='list-disc'>Access, update, or delete your personal information</li>
                <li className='list-disc'>Opt out of receiving promotional communications</li>
                <li className='list-disc'>Request information on how your data is being used</li>
            </ul>
            <h2 className='text-xl font-medium mb-4'>7. Third-Party Links</h2>
            <p className='mb-5'>Our Website may contain links to third-party websites. We are not responsible for their privacy practices or content. We recommend reviewing their privacy policies before providing any personal information.</p>
            <h2 className='text-xl font-medium mb-4'>8. Changes to This Policy</h2>
            <p className='mb-7'>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this page periodically.</p>
            <p>Thank you for trusting Fashion Fusion. We are committed to protecting your privacy and providing a secure shopping experience. <span 
                onClick={() => navigate('/contact')}
                className='text-blue-700 hover:underline cursor-pointer font-medium'>contact</span></p>
        </div>
    </div>
  )
}

export default PrivacyPolicy