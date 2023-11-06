// SignUpView.js
import React, { useState } from "react";
import { signUpUser } from '../../components/SignUpActions';
import spinner from '../../images/spinner.gif';
import './SignUpView.css';
import { Link, useNavigate } from 'react-router-dom';

export const SignUpView = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null); // Store the UserModel instance

    const navigate = useNavigate(); // Hook to navigate between routes

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userDetails = {
            firstname,
            lastname,
            email,
            mobile,
            password
        };
        try {
            const newUser = await signUpUser(userDetails);
            setUser(newUser); // Set the UserModel instance to state
            setMessage('Signup Success');
            navigate('/login'); // Navigate to LoginView after successful signup
        } catch (error) {
            setMessage('Email Already Exists!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignUp}>
                <input 
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
                required
                />
                <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
                required
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
                required
                />
                <input
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
                required
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
                required
                />
                <button type="submit">Signup</button>
            </form>
            {loading && <img src={spinner} alt="Loading..." className="spinner" />}
            {message && <p className="success-message">{message}</p>}
            <Link to="/">Login</Link>
        </div>
    );
};
