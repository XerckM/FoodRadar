import React from "react";
import "./HomeView.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const HomeView = () => {
    return (
        <div className="full-page-home">
            <Navbar showAuthButtons={false}/>
            <div className="main-content-home">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
};
