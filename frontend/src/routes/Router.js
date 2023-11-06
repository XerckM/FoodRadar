// Router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from '../views/Home/HomeView';
import { SignUpView } from '../views/Signup/SignUpView';
import { LoginView } from '../views/Login/LoginView';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}