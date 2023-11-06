import React from "react";
import { Link } from "react-router-dom";

export const HomeActions = () => {
    return (
        <>
            <Link to="/signup" className="nav-button">Sign Up</Link>
            <Link to="/login" className="nav-button">Login</Link>
        </>
    );
};
