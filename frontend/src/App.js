import React, { useState } from 'react';
import { UserActions } from './components/UserActions';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000); // Display the proxy page for 2 seconds
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7', fontSize: '24px', color: '#007BFF' }}>
          Welcome to Food Radar!
        </div>
      ) : (
        <UserActions onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
