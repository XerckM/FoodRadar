import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from '../views/Home/HomeView';
import { SignUpView } from '../views/Signup/SignUpView';
import { LoginView } from '../views/Login/LoginView';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/signup" element={<SignUpView />} /> // Use SignUpView here
        <Route path="/login" element={<LoginView />} />
    </Routes>
  );
}
