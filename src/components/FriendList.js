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

  return (
    <div className="friend-list">
      {bdSoon.length > 0 ? <BdSoon list={bdSoon} /> : null}
      {bdThreeMonth.length > 0 ? <BdThreeMounth list={bdThreeMonth} /> : null}
      {bdLater.length > 0 ? <BdLately list={bdLater} /> : null}
    </div>
  );
}

function daysLeftToBd(person) {
  const today = new Date();
  const birthDate = new Date(Date.parse(person.birthdayDate));
  birthDate.setFullYear(today.getFullYear() + 1);
  const daysLeft = Math.floor(
    ((birthDate.getTime() - today.getTime()) / (60 * 60 * 24 * 1000)) % 365
  );
  return daysLeft;
}
function isBdSoon(person) {
  return daysLeftToBd(person) <= 30;
}

function isBdThreeMonthsAway(person) {
  return daysLeftToBd(person) > 30 && daysLeftToBd(person) <= 90;
}

function isBdLater(person) {
  return daysLeftToBd(person) > 90;
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
