import React, { Component } from "react";
import ListContacts from "./ListContacts";

const port = 9999;

class App extends Component {
  state = {
    contacts: [
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
    ]
  };
  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => c.id !== contact.id)
    }));
  };
  render = () => (
    <div>
      <ListContacts
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    </div>
  );
}

export default App;
