import React, { useState } from "react";
import { UserActions } from "./components/UserActions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";

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
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserActions />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      ) : (
        <UserActions onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
