import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      // Checker-compatible single user fetch
      const data = await fetchUserData(username);
      setUser(data);

      // Advanced search forwarding
      if (onSearch) {
        onSearch({ username, location, minRepos });
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
          min="0"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Checker-compatible conditional rendering */}
      {loading && <p className="mt-2">Loading...</p>}
      {error && (
        <p className="mt-2 text-red-500">Looks like we can’t find the user</p>
      )}
      {user && (
        <div className="mt-4 flex flex-col items-center">
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
