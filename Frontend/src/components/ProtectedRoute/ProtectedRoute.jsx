
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    console.log(isAuthenticated);
    
    if (loading) {
      return <div>{console.log("inside protected routes")
      }</div>; // Optional: Replace with a spinner
    }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute
