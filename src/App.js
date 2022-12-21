import React from "react";
import FriendList from "./components/FriendList";
import { friends } from "./components/Birthdays";
import castle from "./images/castle-birthdays.jpg";

function App() {
  return (
    <div>
      <div>
        <title>Castle Birthday's</title>
        <img src={castle} alt="" className="responsive"></img>
        <h1>Castle Birthdays 🥳</h1>
        <FriendList friends={friends} />
      </div>
    </div>
  );
}

export default App;
