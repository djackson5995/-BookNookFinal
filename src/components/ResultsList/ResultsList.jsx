import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({}) => {
  console.log();
};
return (
  <div className="results-container">
    <h3>Search Results</h3>
    <ul>
      {results.map((book) => (
        <li key={book.id}></li>
      ))}
    </ul>
  </div>
);
