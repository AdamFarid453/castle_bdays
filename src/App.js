import React from "react";
import FriendList from "./components/FriendList";
import { friends } from "./components/Birthdays";
import castle from "../src/images/castle-birthdays.jpg";

function App() {
  return (
    <div>
      <div>
        <img src={castle} alt="a" className="responsive"></img>
        <h1>Castle Birthdays 🥳</h1>
        <FriendList friends={friends} />
      </div>
    </div>
  );
}

export default App;
