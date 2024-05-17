import React from "react";
import Person from "../components/Person"; // import the Person component

function FriendList(props) {
  const { friends } = props;

  // error check if friends is undefined
  if (!friends) {
    return <div>Loading...</div>;
  }

  // Sort friends by upcoming birthday date
  const sortedFriends = [...friends].sort(
    (a, b) => daysLeftToBd(a) - daysLeftToBd(b)
  );

  // Use the filtering functions to create separate arrays for each category of friends
  const bdToday = sortedFriends.filter(isBdToday);
  const bdSoon = sortedFriends.filter(isBdSoon);
  const bdThreeMonth = sortedFriends.filter(isBdThreeMonthsAway);
  const bdLater = sortedFriends.filter(isBdLater);

  return (
    <div className="friend-list">
      {bdToday.length > 0 ? <BdToday list={bdToday} /> : null}
      {bdSoon.length > 0 ? <BdSoon list={bdSoon} /> : null}
      {bdThreeMonth.length > 0 ? <BdThreeMonth list={bdThreeMonth} /> : null}
      {bdLater.length > 0 ? <BdLater list={bdLater} /> : null}
    </div>
  );
}

function daysLeftToBd(person) {
  const today = new Date();
  const currentYear = today.getFullYear();
  let birthDate = new Date(person.birthdayDate);
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

function isBdSoon(person) {
  const daysLeft = daysLeftToBd(person);
  return daysLeft <= 30 && daysLeft > 0;
}

function isBdThreeMonthsAway(person) {
  const daysLeft = daysLeftToBd(person);
  return daysLeft > 30 && daysLeft <= 90;
}

function isBdLater(person) {
  const daysLeft = daysLeftToBd(person);
  return daysLeft > 90;
}

function isBdToday(person) {
  return daysLeftToBd(person) === 0;
}

function BdToday({ list }) {
  return (
    <div>
      <h4 style={{ marginBottom: 10 }}>Birthdays Today! 🎉</h4>
      <hr />
      <div>
        {list.map((person) => (
          <React.Fragment key={person.id}>
            <Person
              fullName={person.name}
              birthdayDate={person.birthdayDate}
              id={person.id}
              imgURL={person.imgURL}
              isToday={true} // pass a special prop to indicate birthday is today
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// BdSoon component
function BdSoon({ list }) {
  return (
    <div id="bd-soon">
      <h4 style={{ marginBottom: 10 }}>In 30 days 👀</h4>
      <hr />
      <div>
        {list.map((person) => (
          <React.Fragment key={person.id}>
            <Person
              fullName={person.name}
              birthdayDate={person.birthdayDate}
              id={person.id}
              imgURL={person.imgURL}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// BdThreeMonth component
function BdThreeMonth({ list }) {
  return (
    <div>
      <h4 style={{ marginBottom: 10 }}>In 3 months</h4>
      <hr />
      <div>
        {list.map((person) => (
          <React.Fragment key={person.id}>
            <Person
              fullName={person.name}
              birthdayDate={person.birthdayDate}
              id={person.id}
              imgURL={person.imgURL}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// BdLater component
function BdLater({ list }) {
  return (
    <div>
      <h4 style={{ marginBottom: 10 }}>Later</h4>
      <hr />
      <div>
        {list.map((person) => (
          <React.Fragment key={person.id}>
            <Person
              fullName={person.name}
              birthdayDate={person.birthdayDate}
              id={person.id}
              imgURL={person.imgURL}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FriendList;
