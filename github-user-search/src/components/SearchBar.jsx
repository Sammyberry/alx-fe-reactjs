import { useState } from "react";

function SearchBar({ onSearch }) {
  // state to hold the text typed in input
  const [username, setUsername] = useState("");

  // when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    if (username.trim()) {
      onSearch(username); // call parent function with username
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // update state
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
