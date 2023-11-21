// frontend/src/routes/Router.js
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginView } from '../views/login/loginView';
import { IndexView } from '../views/index/indexView'
import { SignupView } from '../views/signup/signupView';
import { HomeView } from '../views/home/homeView';
import { AuthContext } from '../components/context/authContext'; 


export const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<HomeView />} />
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/signup" element={<Navigate to="/home" />} />
            {/* add more routes here if needed */}
            <Route path="*" element={<Navigate to="/home" />} /> {/* catch all routes that are not defined above */}
          </>
        ) : (
          <>
            <Route path="/" element={<IndexView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/home" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
