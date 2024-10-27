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
          }
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
    <RouterProvider router={router} />
)
