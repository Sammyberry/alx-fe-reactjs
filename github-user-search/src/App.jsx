import { useState } from 'react'
import SearchBar from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null); // user data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      console.log("Fetched data:", data);
      setUser(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Looks like we can't find the user");
    }finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Github User Search</h1>
      <SearchBar onSearch={handleSearch}/>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserCard user={user}/>}
    </div>
  );
}

export default App;
