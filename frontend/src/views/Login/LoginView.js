// LoginView.js
import React, { useState } from "react";
import { UserController } from "../../controllers/UserController";
import spinner from '../../images/spinner.gif';
import './LoginView.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


export const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { setToken } = useAuth(); // Use the setToken function from the context

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await UserController.loginUser({ email, password });
            setToken(response.token)
            console.log('Login response:', response);
            setMessage('Login Successful');
            navigate('/home');
        } catch (error) {
            setMessage('Login Failed!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-body-container">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
                {loading && <img src={spinner} alt="Loading..." className="spinner" />}
                {message && <p className="success-message">Login Successful</p>}
            </div>
        </div>
    );
};
