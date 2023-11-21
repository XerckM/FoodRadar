// App.js
import React from 'react';
import { AppRoutes } from './routes/router';
import { AuthProvider } from './components/context/authContext';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App;
