// SignUpAction.js
import axios from 'axios';
import UserModel from '../models/UserModel';

const API_URL = 'http://localhost:8000/api/user/register';

export const signUpUser = async (userDetails) => {
    try {
        const response = await axios.post(API_URL, userDetails);
        const data = response.data;
        const user = new UserModel(data._id, data.firstname, data.lastname, data.email, data.mobile, data.role, data.isBlocked);
        return user;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};
