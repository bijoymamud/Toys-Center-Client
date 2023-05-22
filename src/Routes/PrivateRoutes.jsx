import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Pages/providers/AuthProviders';

const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>
  }

  if (user?.email) {
    return children;
  }

  else {
    alert('You have to login');
    return <Navigate to="/login" replace></Navigate>

  }


};

export default PrivateRoutes;