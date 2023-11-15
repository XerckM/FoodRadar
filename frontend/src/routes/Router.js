// frontend/src/routes/Router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexView }from '../views/Index/IndexView';
import { SignUpView} from '../views/Signup/SignUpView';
import { LoginView } from '../views/Login/LoginView';
import { HomeView }from '../views/Home/HomeView';
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/login" element={<LoginView />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomeView />} />
        </Route>
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};
