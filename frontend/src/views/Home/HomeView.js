import React from "react";
import "./HomeView.css";

export const HomeView = () => {
    return (
        <div className="full-page-home">
            <header className="navbar-home">
                <div className="nav-left-home">
                    <button className="hamburger-button-home">☰</button>
                    <span className="nav-title-home">Food Radar</span>
                </div>
                <div className="nav-buttons-home">
                    {/* Add a link to the ProfileView here */}
                </div>
            </header>
            <div className="main-content-home">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
};
