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
import NotFound from './components/NotFound/NotFound.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { AuthProvider } from './Context/AuthProvider.jsx';
import Cart from './pages/ProtectedRoutes/Cart/Cart.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      }, 
    ]
  },
  {
    path: "/login",
    element: <Login />,
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
