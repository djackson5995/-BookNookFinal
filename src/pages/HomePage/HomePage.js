import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h2>Welcome to your Home Page {user.userName}!</h2>
      <h4>Please navigate to the search page link to begin your search!</h4>

      {/* Link to the search page */}
      <Link to="/SearchPage">Go to Search Page</Link>
    </div>
  );
};

export default HomePage;
