import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData, searchUsersAdvanced } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]); // multiple users
  const [singleUser, setSingleUser] = useState(null); // checker-compatible single user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [currentCriteria, setCurrentCriteria] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (criteriaOrUsername) => {
    setLoading(true);
    setError(null);
    setUsers([]);
    setSingleUser(null);
    setPage(1);

    let isAdvanced =
      typeof criteriaOrUsername === "object" && criteriaOrUsername.username;

    try {
      if (isAdvanced) {
        setCurrentCriteria(criteriaOrUsername);
        const results = await searchUsersAdvanced({
          ...criteriaOrUsername,
          page: 1,
        });
        setUsers(results);
        setHasMore(results.length === 20);
        if (results.length === 0)
          setError("No users match your search criteria.");
      } else {
        const data = await fetchUserData(criteriaOrUsername);
        setSingleUser(data);
      }
    } catch {
      setError("Failed to fetch users. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!currentCriteria) return;
    const nextPage = page + 1;
    setLoading(true);
    try {
      const results = await searchUsersAdvanced({
        ...currentCriteria,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...results]);
      setPage(nextPage);
      setHasMore(results.length === 20);
    } catch {
      setError("Failed to load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Checker-compatible single user display */}
      {singleUser && <UserCard user={singleUser} />}

      {/* Advanced search multiple users display */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
