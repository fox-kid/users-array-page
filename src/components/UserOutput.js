import React, { useState, useEffect } from "react";

import { fetchUser } from "../api";
import User from "./User";
// import ErrorMessage from "./ErrorMessage"

function UserOutput(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUser(props)
      .then((data) => {
        setUser(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="userBox">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <User user={user.results[0]} />
      )}
    </div>
  );
}

export default UserOutput;
