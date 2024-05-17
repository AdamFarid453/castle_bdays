import React from "react";

function Person({ fullName, birthdayDate, id, imgURL, isToday }) {
  const daysLeft = daysLeftToBd(birthdayDate);
  return (
    <div className="person">
      <div className="person-info">
        <h5>{fullName}</h5>
        <p>
          {isToday
            ? "Happy Birthday! 🎂🎉"
            : `${daysLeft} days left until birthday (${birthdayDate
                .split("-")
                .slice(1)
                .join("-")})`}
        </p>
      </div>
      {imgURL && <img src={imgURL} alt={fullName} />}
    </div>
  );
}

function daysLeftToBd(birthday) {
  const today = new Date();
  const currentYear = today.getFullYear();
  let birthDate = new Date(birthday);
  birthDate.setFullYear(currentYear);

  // Calculate time difference in milliseconds
  const timeDiff = birthDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Handle birthdays today
  if (
    daysLeft === 0 &&
    birthDate.getDate() === today.getDate() &&
    birthDate.getMonth() === today.getMonth()
  ) {
    return 0;
  }

  // If the birthday has already occurred this year, calculate for the next year
  if (daysLeft < 0) {
    birthDate.setFullYear(currentYear + 1);
    const nextYearTimeDiff = birthDate.getTime() - today.getTime();
    return Math.ceil(nextYearTimeDiff / (1000 * 60 * 60 * 24));
  }

  return daysLeft;
}

export default Person;
