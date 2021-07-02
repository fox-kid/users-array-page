import React, { useState } from "react";

import UserSeeMore from "./UserSeeMore";

function User(props) {
  const [seeMore, setSeeMore] = useState(false);

  return !seeMore ? (
    <div className="userInfo" key={props.user.id}>
      <img src={props.user.picture.medium}></img>
      <span>{props.user.email}</span>
      <span>
        {props.user.name.title} {props.user.name.first} {props.user.name.last}
      </span>
      <span>{props.user.location.city}</span>
      <span>{props.user.dob.age}</span>
      <span>{props.user.dob.date}</span>
      <button className="button" onClick={() => setSeeMore((prev) => !prev)}>
        See more
      </button>
    </div>
  ) : (
    <UserSeeMore props={props} setSeeMore={setSeeMore} />
  );
}

export default User;
