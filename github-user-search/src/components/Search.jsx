import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [user, setUser] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);



  async function handleSearch(username) {
    setLoading(true);
    const data = await fetchUserData(username)
    setUser(data);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(prompt);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={(e) => setPrompt(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {loading ?
        <h1>Loading...</h1>
        : user ?
          user.map(user => (
            <div>
              <h2>{user.name}</h2>
              <h2>{user.created_at}</h2>
            </div>
          )) :
          <h1>Looks like we cant find the user</h1>
      }

    </div>
  )
}


export default Search;
