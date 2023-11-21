// frontend/src/components/Buttons/Login/LoginButton.js
import React from 'react';
import './loginButton.css';

const LoginButton = ({ children, className, ...props }) => {
    const buttonClassName = className || 'login-button';
    return (
        <button className={buttonClassName} {...props}>
            {children}
        </button>
    );
};

export default LoginButton;
