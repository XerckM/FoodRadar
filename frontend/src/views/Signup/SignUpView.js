// frontend/src/views/signup/signupView.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userController from '../../controllers/userController';
import './signupView.css';

export const SignupView = () => {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await userController.signup(userData);
        if (response.success) {
            navigate('/login');
        } else {
            // Handle error, show message to user
            console.error(response.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <input
                    type="text"
                    name="firstname"
                    className="signup-input"
                    value={userData.firstname}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    name="lastname"
                    className="signup-input"
                    value={userData.lastname}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="signup-input"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="mobile"
                    className="signup-input"
                    value={userData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile"
                />
                <input
                    type="password"
                    name="password"
                    className="signup-input"
                    value={userData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                />
                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
    );
};
