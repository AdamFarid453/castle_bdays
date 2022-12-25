import React from "react";
import Person from "../components/Person"; // import the Person component

function FriendList(props) {
  const { friends } = props;
  // error check if friends is undefined
  if (!friends) {
    return <div>Loading...</div>;
  }
  // Use the filtering functions to create separate arrays for each category of friends
  const bdSoon = friends.filter(isBdSoon);
  const bdThreeMonth = friends.filter(isBdThreeMonthsAway);
  const bdLater = friends.filter(isBdLater);
  const bdToday = friends.filter(isBdToday);

  return (
    <div className="friend-list">
      {bdToday.length > 0 ? <BdToday list={bdToday} /> : null}
      {bdSoon.length > 0 ? <BdSoon list={bdSoon} /> : null}
      {bdThreeMonth.length > 0 ? <BdThreeMounth list={bdThreeMonth} /> : null}
      {bdLater.length > 0 ? <BdLately list={bdLater} /> : null}
    </div>
  );
}

function daysLeftToBd(person) {
  const today = new Date();
  const birthDate = new Date(
    Date.parse(person.birthdayDate) + 3600 * 1000 * 24
  );
  const diffInMs = new Date(birthDate) - new Date(today);
  // convert the difference in days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  //return the rounded difference
  return Math.round(Math.abs(diffInDays));
}
function isBdSoon(person) {
  return daysLeftToBd(person) <= 30 && daysLeftToBd(person) > 0;
}

function isBdThreeMonthsAway(person) {
  return daysLeftToBd(person) > 30 && daysLeftToBd(person) <= 90;
}

function isBdLater(person) {
  return daysLeftToBd(person) > 90;
}

function isBdToday(person) {
  return daysLeftToBd(person) === 0;
}

//BdayToday component
function BdToday({ list }) {
  return (
    <div>
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
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// BdSoon component
function BdSoon({ list }) {
  return (
    <div id="bd-soon">
      <div>
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
    </div>
  );
}

// BdThreeMounth component
function BdThreeMounth({ list }) {
  return (
    <div>
      <div>
        <h4 style={{ marginBottom: 10 }}>In 3 months </h4>
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
    </div>
  );
}

// BdLately component
function BdLately({ list }) {
  return (
    <div>
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
    </div>
  );
}

export default FriendList;
