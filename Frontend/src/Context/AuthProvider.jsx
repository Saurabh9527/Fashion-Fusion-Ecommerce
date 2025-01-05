
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { API_ENDPOINT } from "../apiClient/apiEndPoint";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [cartProducts, setCartProducts] = useState('');

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
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
            console.error("Error validating token:", error);
            setIsAuthenticated(false);
          })
          .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setToken, getToken, removeToken, userEmail, setUserEmail, cartProducts, setCartProducts }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
