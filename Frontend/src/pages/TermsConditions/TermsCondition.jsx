import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const TermsCondition = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='mr-10 ml-10 lg:max-w-[900px] lg:mx-auto pt-16'>
                <h3 className='text-2xl text-center text-gray-800'>FASHIONFUSION: TERMS OF USE</h3>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>1. General</h2>
                    <p className='text-sm text-customGray'>1.1 This website is operated by Fashion Fusion. Throughout the site, the terms “we,” “us,” and “our” refer to Fashion Fusion.
                        1.2 By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms”), including any additional terms and conditions and policies referenced herein and/or available by hyperlink.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>2. Eligibility</h2>
                    <p className='text-sm text-customGray'>2.1 To use this website, you must be at least 18 years old or have reached the age of majority in your jurisdiction and have the legal capacity to enter into contracts.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>3. Accounts</h2>
                    <p className='text-sm text-customGray'>3.1 You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to accept responsibility for all activities that occur under your account.
                        3.2 You must notify us immediately of any unauthorized use of your account or any other breach of security.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>4. Products and Services</h2>
                    <p className='text-sm text-customGray'>4.1 We strive to display as accurately as possible the colors, features, and details of the products available on our website. However, we do not guarantee that the display of any color or other feature will be accurate.
                        4.2 All products are subject to availability, and we reserve the right to discontinue any product at any time.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>5. Pricing and Payments</h2>
                    <p className='text-sm text-customGray'>5.1 Prices for our products are subject to change without notice.
                        5.2 We reserve the right to refuse or cancel any order if there is an error in pricing or product information.
                        5.3 Payments must be made through the payment methods provided on our website. By providing your payment information, you represent and warrant that you have the legal right to use the payment method selected.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>6. Shipping and Delivery</h2>
                    <p className='text-sm text-customGray'>6.1 Shipping and delivery times are estimates and may vary based on location, shipping method, and other factors.
                        6.2 We are not responsible for any delays in delivery caused by events beyond our control, such as natural disasters or courier service issues.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>7. Returns and Refunds</h2>
                    <p className='text-sm text-customGray'>7.1 Our return and refund policy is detailed on the [Refund Policy Page]. Please review it before making a purchase.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>8. Prohibited Activities</h2>
                    <div>
                    <p className='text-sm text-customGray mb-2'>8.1 You agree not to use the website for any unlawful purpose or engage in any conduct that could damage, disable, overburden, or impair our website.</p>
                    <p className='text-sm text-customGray mb-1'>8.2 Prohibited activities include, but are not limited to:</p>
                        <ul className='text-sm text-customGray list-disc ml-6'>
                            <li>Unauthorized access to our systems</li>
                            <li>Distributing malicious software</li>
                            <li>Violating any applicable laws or regulations</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>9. Intellectual Property</h2>
                    <p className='text-sm text-customGray'>9.1 All content on this website, including text, graphics, logos, and images, is the property of Fashion Fusion or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>10. Limitation of Liability</h2>
                    <p className='text-sm text-customGray'>10.1 To the fullest extent permitted by law, Fashion Fusion shall not be liable for any damages, including but not limited to direct, indirect, incidental, punitive, or consequential damages arising from your use of the website or products.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>11. Indemnification</h2>
                    <p className='text-sm text-customGray'>11.1 You agree to indemnify, defend, and hold harmless Fashion Fusion, its officers, directors, employees, and affiliates from any claims, damages, or expenses arising out of your breach of these Terms or your use of the website.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>12. Changes to Terms</h2>
                    <p className='text-sm text-customGray'>12.1 We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>13. Governing Law</h2>
                    <p className='text-sm text-customGray'>13.1 These Terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
                    </p>
                </div>
                <div className='mt-10 mb-5'>
                    <h2 className='font-medium text-xl mb-2'>14. Contact Us</h2>
                    <p className='text-sm text-customGray'>14.1 If you have any questions or concerns about these Terms, please <Link
                        to={`/contact`}
                        className='text-blue-700 hover:underline'>contact us</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TermsCondition
