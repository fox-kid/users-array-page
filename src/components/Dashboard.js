import React, { useState } from "react";

import UserOutput from "./UserOutput";

function Dashboard() {
  const [users, setUsers] = useState([1]);
  const [counter, setCounter] = useState(2);

  function increaseUsers() {
    setUsers((prev) => prev.concat(counter));
    setCounter((prev) => prev + 1);
  }

  return (
    <section className="page-wrapper">
      <div className="info-wrapper">
        {users.map((item) => (
          <UserOutput key={item} page={counter - 1} />
        ))}
      </div>
      <button className="button" onClick={increaseUsers}>
        Next
      </button>
    </section>
  );
} 

export default Dashboard;
