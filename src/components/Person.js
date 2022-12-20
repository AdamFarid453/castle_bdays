import React from "react";

function Person({ fullName, birthdayDate, id, imgURL }) {
  const daysLeft = daysLeftToBd(birthdayDate);
  return (
    <div className="person">
      <div className="person-info">
        <h5>{fullName}</h5>
        <p>{`${daysLeft} days left until birthday (${birthdayDate
          .split("-")
          .slice(1)
          .join("-")})`}</p>
      </div>
      {imgURL && <img src={imgURL} alt={fullName} />}
    </div>
  );
}

function daysLeftToBd(birthday) {
  // grab the current day
  const today = new Date();
  // parse the dates in Birthday.js and add a day to offset the time difference
  const birthDate = new Date(Date.parse(birthday) + 3600 * 1000 * 24);
  // calculate the difference in days
  const diffInMs = new Date(birthDate) - new Date(today);
  // convert the difference in days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  //return the rounded difference
  return Math.round(Math.abs(diffInDays));
}

export default Person;
