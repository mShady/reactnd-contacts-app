import React, { Component } from "react";
import ListContacts from "./ListContacts";

const port = 9999;

const contacts = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: `http://localhost:${port}/karen.jpg`
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: `http://localhost:${port}/richard.jpg`
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: `http://localhost:${port}/tyler.jpg`
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
