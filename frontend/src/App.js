import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserActions } from './components/UserActions';
import Signup from './components/Signup';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000); // Display the proxy page for 2 seconds
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7', fontSize: '24px', color: '#007BFF' }}>
                  Welcome to Food Radar!
                </div>
              ) : (
                <UserActions onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
