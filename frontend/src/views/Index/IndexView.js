import React from "react";
import "./IndexView.css";

export const IndexView = () => {
    return (
        <div className="full-page">
            <header className="navbar">
                <div className="nav-left">
                    <button className="hamburger-button">☰</button>
                    <span className="nav-title">Food Radar</span>
                </div>
                <div className="nav-buttons">
                    <a href="/signup" className="signup-button">Sign Up</a>
                    <a href="/login" className="login-button">Login</a>
                </div>
            </header>
            <div className="main-content">
                <h1>Food Radar</h1>
                <h2>Find the best food in your area!</h2>
            </div>
        </div>
    );
};
