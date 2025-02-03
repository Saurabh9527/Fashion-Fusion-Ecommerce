import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Body = lazy(() => import('./pages/Body/Body.jsx'));
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword.jsx'));
import NotFound from './components/NotFound/NotFound.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { AuthProvider } from './Context/AuthProvider.jsx';
const Cart = lazy(()=> import('./pages/ProtectedRoutes/Cart/Cart.jsx'));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/ProtectedRoutes/Checkout/CheckoutPage.jsx';
import CategoriesProducts from './pages/Categories/CategoriesProducts.jsx';
import Profile from './pages/ProtectedRoutes/Profile/Profile.jsx';
import OtpVerification from './pages/OtpVerification/OtpVerification.jsx';
import Contact from './pages/Contact/Contact.jsx';
import TermsCondition from './pages/TermsConditions/TermsCondition.jsx';
import Faq from './pages/FAQ/Faq.jsx';
import Wishlist from './pages/ProtectedRoutes/Wishlist/Wishlist.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import Address from './pages/ProtectedRoutes/Address/Address.jsx';
import Orders from './pages/Orders/Orders.jsx';
import ReviewForm from './components/Reviews/ReviewForm.jsx';
import OrderDetails from './pages/ProtectedRoutes/OrderDetails/OrderDetails.jsx';
import BodyShimmerUI from './ShimmerUI/BodyShimmerUI/BodyShimmerUI.jsx';
import CartShimmerUI from './ShimmerUI/CartShimmerUI/CartShimmerUI.jsx';
import CustomErrorBoundary from './components/ErrorBoundary/CustomErrorBoundary.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CustomErrorBoundary>
        <App />
      </CustomErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<BodyShimmerUI />}>
            <Body />
          </Suspense>
        )
      },
      {
        path: '/home',
        element: (
          <Suspense fallback={<BodyShimmerUI />}>
            <Body />
          </Suspense>
        )
      },
      {
        path: '/product/:prodId',
        element: <ProductDetails />
      },
      {
        path: '/categories/:category',
        element: <CategoriesProducts />
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
          <Suspense fallback={<CartShimmerUI />}>
            <Cart />
          </Suspense>
        </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/address",
        element: (
          <ProtectedRoute>
            <Address />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-review/:prodId",
        element: (
          <ProtectedRoute>
            <ReviewForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-details/:orderId",
        element: (
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/terms-conditions',
        element: <TermsCondition />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/updatepassword",
    element: (
      <Suspense fallback={<div>Loading....</div>}>
        <ForgotPassword />
      </Suspense>
    )
  },
  {
    path: "/verify-otp",
    element: <OtpVerification />,
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    )
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </AuthProvider>
)
