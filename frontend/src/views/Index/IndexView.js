import React, { useState } from "react";
import "./IndexView.css";

export const IndexView = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="full-page">
            <header className={`navbar ${isMenuOpen ? 'hide' : ''}`}>
                <div className="nav-left">
                    <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
                    <span className="nav-title">Food Radar</span>
                </div>
                <div className="nav-buttons">
                    <a href="/signup" className="signup-button">Sign Up</a>
                    <a href="/login" className="login-button">Login</a>
                </div>
            </header>
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
            <aside className={isMenuOpen ? "menu open" : "menu"}>
                <a href="/signup" className="menu-button signup">Sign Up</a>
                <a href="/login" className="menu-button login">Login</a>
            </aside>
            <div className="main-content">
                <h1>Food Radar</h1>
                <h2>Find the best food in your area!</h2>
            </div>
        </div>
    );
};
