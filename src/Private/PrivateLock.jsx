import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvidor';

const PrivateLock = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if(user){
          if(loading){
            return <h4 className="text-red">L o a d i n g . . . . .....</h4>
          }
      }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace />;
};

export default PrivateLock;
