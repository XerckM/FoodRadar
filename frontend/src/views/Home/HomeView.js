import React from "react";
import "./HomeView.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Search } from "../../components/Search/Search";

export const HomeView = () => {
    return (
        <div className="full-page-home">
            <Navbar showAuthButtons={false}/>
            <div className="main-content-home">
                <Search />
            </div>
        </div>
    );
};
