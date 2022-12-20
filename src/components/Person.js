import React from "react";

function Person({ fullName, birthdayDate, id, imgURL }) {
  const daysLeft = daysLeftToBd(birthdayDate);
  return (
    <div className="person">
      <div className="person-info">
        <h5>{fullName}</h5>
        <p>{`${daysLeft} days left until birthday (${birthdayDate})`}</p>
      </div>
      {imgURL && <img src={imgURL} alt={fullName} />}
    </div>
  );
}

function daysLeftToBd(birthday) {
  const today = new Date();
  const birthDate = new Date(Date.parse(birthday));
  const diffInMs = new Date(birthDate) - new Date(today);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return Math.round(Math.abs(diffInDays));
}

export default Person;
