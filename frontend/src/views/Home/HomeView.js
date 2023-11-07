import React from "react";
import "./HomeView.css";

export const HomeView = () => {
    return (
        <div className="full-page">
            <header className="navbar">
                <div className="nav-left">
                    <button className="hamburger-button">☰</button>
                    <span className="nav-title">Food Radar</span>
                </div>
                <div className="nav-buttons">
                    {/* Add a link to the ProfileView here */}
                </div>
            </header>
            <div className="main-content">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
};
