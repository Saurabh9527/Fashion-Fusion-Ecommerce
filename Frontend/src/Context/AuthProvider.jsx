
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { API_ENDPOINT } from "../apiClient/apiEndPoint";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const [orderDetails, setOrderDetails] = useState(() => {
    const savedOrderDetails = localStorage.getItem('orderDetails');
    return savedOrderDetails ? JSON.parse(savedOrderDetails) : {};
  });

  const [cartProducts, setCartProducts] = useState(() => {
    const storedCartProducts = sessionStorage.getItem("cartProducts");
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  });


const setToken = (token) => {
  localStorage.setItem("jwtToken", token);
};

const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const removeToken = () => {
  localStorage.removeItem("jwtToken");
};


  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.log("token not found");  
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      axios
      .post(`${API_ENDPOINT.POST.get_auth}`, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("token  found from backend");
            setIsAuthenticated(true);
          } else {
            console.log("token not found from backend");
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
            console.error("Error validating token:", error);
            setIsAuthenticated(false);
          })
          .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  }, [orderDetails]);

  useEffect(() => {
    sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      setIsAuthenticated, 
      loading, 
      setToken, 
      getToken, 
      removeToken, 
      userEmail, 
      setUserEmail, 
      cartProducts, 
      setCartProducts, 
      orderDetails, 
      setOrderDetails, 
      deliveryAddress, 
      setDeliveryAddress, 
      paymentMethod, 
      setPaymentMethod
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
