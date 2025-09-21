import axios from 'axios';

// Fetch user data from GitHub API
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        return response.data; // return user data
    } catch (error) {
        throw error; // throw error to handle in App.jsx
    }

};