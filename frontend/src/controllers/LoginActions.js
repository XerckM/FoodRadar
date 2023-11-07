// LoginAction.js
import axios from 'axios';
import UserModel from '../models/UserModel';

const API_URL = 'http://localhost:8000/api/user/login'; // Adjust this to your backend login endpoint

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(API_URL, { email, password });
        const data = response.data;
        const user = new UserModel(data._id, data.firstname, data.lastname, data.email, data.mobile, data.role, data.isBlocked);
        return user;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
