
import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { API_ENDPOINT } from "../apiClient/apiEndPoint";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

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
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
