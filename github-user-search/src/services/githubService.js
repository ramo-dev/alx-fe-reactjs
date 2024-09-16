import axios from "axios";


export async function fetchUserData(username) {
  const githubUrl = `https://api.github.com/users/${username}`
  const data = await axios.get(githubUrl);
  return data.json();
}
