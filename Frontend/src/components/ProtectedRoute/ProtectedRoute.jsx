
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import axios from "axios";
import { API_ENDPOINT } from "../../apiClient/apiEndPoint";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading, getToken } = useContext(AuthContext);
    const [isTokenValidated, setIsTokenValidated] = useState(false);
    
      useEffect(() => {
        const token = getToken();
        console.log("token verify useffect run and i call api");
        
        if (!token) {
          console.log("token not found");  
            setIsAuthenticated(false);
            setLoading(false);
            setIsTokenValidated(true);
            return;
          }
    
          axios
          .post(`${API_ENDPOINT.POST.get_auth}/validate`, {}, {
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
              .finally(() => {
                setLoading(false);
                setIsTokenValidated(true);
              });
      }, [getToken, setIsAuthenticated, setLoading]);

      if (loading || !isTokenValidated) {
        return <div>Loading...</div>; // Replace with a spinner if you prefer
      }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute
