import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = ({ showAuthButtons }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className={`navbar ${isMenuOpen ? 'hide' : ''}`}>
                <div className="nav-left">
                    <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
                    <span className="nav-title">Food Radar</span>
                </div>
                {showAuthButtons && <div className="nav-buttons">
                    <a href="/signup" className="signup-button">Sign Up</a>
                    <a href="/login" className="login-button">Login</a>
                </div>}
            </header>
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
            <aside className={isMenuOpen ? "menu open" : "menu"}>
                {showAuthButtons && <div className="sidebar-buttons">
                    <a href="/signup" className="menu-button signup">Sign Up</a>
                    <a href="/login" className="menu-button login">Login</a>
                </div>}
            </aside>
        </>
    );
};
