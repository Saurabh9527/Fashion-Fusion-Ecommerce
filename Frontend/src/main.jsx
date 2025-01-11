import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './pages/Body/Body.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { AuthProvider } from './Context/AuthProvider.jsx';
import Cart from './pages/ProtectedRoutes/Cart/Cart.jsx';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: '/home',
        element: <Body />
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
            <Cart />
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
    element: <ForgotPassword />,
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
