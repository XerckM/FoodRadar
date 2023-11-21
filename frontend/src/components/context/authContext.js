import React, { createContext, useState, useEffect } from 'react';
import UserController from '../../controllers/userController';
import UserModel from '../../models/userModel';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = async (email, password) => {
        try {
            const user = await UserController.login(email, password);
            const newUser = new UserModel(user.data);
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('token', newUser.token);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = async () => {
        await UserController.logout();
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
