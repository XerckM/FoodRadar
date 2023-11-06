import React from "react";
import "./HomeView.css";
import background from "../../images/background.jpg";

export const HomeView = () => {
    return (
        <div className="full-page">
            <header className="navbar">
                <div className="nav-buttons">
                    <a href="/signup" className="signup-button">Sign Up</a>
                    <a href="/login" className="login-button">Login</a>
                </div>
            </header>
            <div className="main-content">
                <div className="image-container">
                    <img className="background-image" src={ background } alt="Background" />
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
        </div>
    );
};
