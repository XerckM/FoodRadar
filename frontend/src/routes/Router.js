import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home/HomeView';
import { SignUpAction } from '../components/SignUpAction';
import { LoginView } from '../views/Login/LoginView';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpAction />} />
        <Route path="/login" element={<LoginView />} />
    </Routes>
  );
}