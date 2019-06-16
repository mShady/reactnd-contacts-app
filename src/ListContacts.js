import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  state = { query: "" };

  updateQuery(query) {
    this.setState({ query: query.trim() });
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  render() {
    const { contacts } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toUpperCase().includes(this.state.query.toUpperCase())
    );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={event => {
              this.updateQuery(event.target.value);
            }}
          />
          <a
            href="#create"
            onClick={() => {
              this.props.onNavigate();
            }}
            className="add-contact"
          >
            Add Contact
          </a>
        </div>
        {filteredContacts.length !== contacts.length ? (
          <div className="showing-contacts">
            <span>
              Now showing {filteredContacts.length} of {contacts.length}
            </span>
            <button onClick={() => this.updateQuery("")}>Show all!</button>
          </div>
        ) : (
          ""
        )}
        <ol className="contact-list">
          {filteredContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => this.props.onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
