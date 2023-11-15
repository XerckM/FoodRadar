import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserController } from "../../controllers/UserController";
import "./Navbar.css";

export const Navbar = ({ showAuthButtons }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { token, setToken } = useAuth(); // Use the setToken function from the context
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await UserController.logoutUser(token);
            setToken(null); // Clear the token from the context
            localStorage.removeItem('token'); // Clear the token from local storage
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <>
            <header className={`navbar ${isMenuOpen ? 'hide' : ''}`}>
                <div className="nav-left">
                    <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
                    <span className="nav-title">Food Radar</span>
                </div>
                <div className="nav-buttons">
                    {showAuthButtons ? (
                        <>
                            <a href="/signup" className="signup-button">Sign Up</a>
                            <a href="/login" className="login-button">Login</a>
                        </>
                    ) : (
                        // Show logout button when showAuthButtons is false
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    )}
                </div>
            </header>
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
            <aside className={isMenuOpen ? "menu open" : "menu"}>
                <div className="sidebar-buttons">
                    {showAuthButtons ? (
                        <>
                            <a href="/signup" className="menu-button signup">Sign Up</a>
                            <a href="/login" className="menu-button login">Login</a>
                        </>
                    ) : (
                        // Also show logout button in the sidebar menu
                        <button onClick={handleLogout} className="menu-button logout">Logout</button>
                    )}
                </div>
            </aside>
        </>
    );
};
