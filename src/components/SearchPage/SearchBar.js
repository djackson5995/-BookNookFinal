import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm, handSearch }) => {
  return (
    <form className="searchBar" onSubmit={(e) => handSearch(e)}>
      <input
        placeholder="Type to search for a book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
