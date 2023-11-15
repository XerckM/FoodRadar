// frontend/src/controllers/UserController.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const UserController = {
  registerUser: async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
      } catch (error) {
        console.error('Error signing up:', error);
        throw error;
      }
  },
  loginUser: async ({ email, password }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
      } catch (error) {
        console.error('Error logging in:', error);
        throw error;
      }
  },
  logoutUser: async () => {
    try {
        const response = await axios.get(`${API_URL}/logout`, { withCredentials: true });
        console.log(response)
        return response;
      } catch (error) {
        console.error('Error logging out:', error);
        throw error;
      }
  },
  // Implement other user-related functions like getUserProfile, updateUserProfile
};
