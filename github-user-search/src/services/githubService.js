import axios from "axios";

// Original checker-compatible fetchUserData
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search with optional location/minRepos
export const searchUsersAdvanced = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&per_page=20&page=${page}`
    );

    return response.data.items;
  } catch (error) {
    throw error;
  }
};

// Fetch full user details for advanced display (optional)
export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
