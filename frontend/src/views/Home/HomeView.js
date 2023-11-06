import React from "react";
// import { HomeActions } from "../../components/HomeActions";
import "./HomeView.css";

export const HomeView = () => {
    return (
        <div className="full-page">
            <h2 className="title">Welcome to Food Radar</h2>
            <header className="navbar">
                <div className="nav-buttons">
                    <a href="/signup" className="signup-button">Sign Up</a>
                    <a href="/login" className="login-button">Login</a>
                </div>
            </header>
            <div className="main-content">
                <div className="image-container">
                    <img src="https://media.istockphoto.com/id/475511846/vector/kitchen-seamless-pattern-vector-background.jpg?s=612x612&w=0&k=20&c=inpW5Mc2MFyuc7PsMXVY49OUBU39EXekcCNe8xVeI_k=" alt="Background" />
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
        </div>
    );
};
