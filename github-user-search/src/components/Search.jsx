import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
