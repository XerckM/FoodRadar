// App.js
import React from 'react';
import { AppRoutes } from './routes/Router';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App;
