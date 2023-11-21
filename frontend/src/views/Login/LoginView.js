import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../../components/buttons/login/loginButton';
import { AuthContext } from '../../components/context/authContext';
import './loginView.css';


export const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login(email, password);
            navigate('/home');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <input
                className="login-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </div>
    );
};
