
import axios from "axios";

export async function fetchUserData({ username, location, minRepos }) {
  const query = [
    username ? `user:${username}` : "",
    location ? `location:${location}` : "",
    minRepos ? `repos:>${minRepos}` : ""
  ]
    .filter(Boolean)
    .join("+");

  const githubUrl = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await axios.get(githubUrl);
    return response.data.items; // Return list of users
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

