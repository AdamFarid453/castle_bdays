import React from "react";
import FriendList from "./components/FriendList";
import { friends } from "./components/Birthdays";
import castle from "./images/castle-birthdays.jpg";

// couple bugs to fix:
// We need to have the birthdaydate be in the format of "MM-DD" so that we can compare it to the current date
// When a friend's birthday passes, we have to bring them to the bottom of the list
// can accomplish this by sorting the later list by birthday date

function App() {
  return (
    <div>
      <div>
        <img src={castle} alt="" className="responsive"></img>
        <h1>Castle Birthdays 🥳</h1>
        <FriendList friends={friends} />
      </div>
    </div>
  );
}

export default App;
