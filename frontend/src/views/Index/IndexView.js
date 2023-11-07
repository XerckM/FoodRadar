import React from "react";
import "./IndexView.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const IndexView = () => {
    return (
        <div className="full-page">
            <Navbar showAuthButtons={true}/>
            <div className="main-content">
                <h1>Food Radar</h1>
                <h2>Find the best food in your area!</h2>
            </div>
        </div>
    );
};
