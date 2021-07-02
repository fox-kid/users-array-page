import React from "react";

function UserSeeMore({ props, setSeeMore }) {
  return (
    <section className="fullInfo">
      <div className="fullInfoBody">
        <div className="fullInfoText">
          <span>Email: {props.user.email}</span>
          <span>
            Name: {props.user.name.title} {props.user.name.first}
            {props.user.name.last}
          </span>
          <span>Country: {props.user.location.country}</span>
          <span>City: {props.user.location.city}</span>
          <span>Postcode: {props.user.postcode}</span>
          <span>Age: {props.user.dob.age}</span>
          <span>Date of Birth: {props.user.dob.date}</span>
          <span>Phone: {props.user.phone}</span>
          <span>Cell: {props.user.cell}</span>
        </div>
        <div className="fullInfoImage">
          <img src={props.user.picture.large}></img>
          <span>{props.user.login.username}</span>
        </div>
      </div>
      <button className="button" onClick={() => setSeeMore((prev) => !prev)}>
        Back
      </button>
    </section>
  );
}

export default UserSeeMore;
