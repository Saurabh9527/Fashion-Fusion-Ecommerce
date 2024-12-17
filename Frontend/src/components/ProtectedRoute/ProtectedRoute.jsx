
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Loading...</div>; // Optional: Replace with a spinner
    }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute
