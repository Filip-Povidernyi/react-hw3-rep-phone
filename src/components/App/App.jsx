import React, { Component } from "react";
import css from "./style.module.css";
import Form from "../Form/Form";
import { nanoid } from "nanoid/non-secure";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";



class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  handlerChange = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState(JSON.parse(contacts));
    };
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state));
    };
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return
    }
    const newContact = { id: nanoid(), name: name.toLowerCase(), number };
    const contactsObj = { contacts: [...contacts, newContact] };
    this.setState(contactsObj);
    localStorage.setItem('contacts', JSON.stringify(contactsObj));
  };

  deleteContact = (name) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.name !== name);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.appStyle}>
        <div className={css.phonebook}>
          <h1><b>Phonebook</b></h1>
          <Form addContact={this.addContact} />
        </div>
        <div>
          <h1><b>Contacts</b></h1>
          <Filter filter={filter} handlerChange={this.handlerChange} />
          <ContactsList data={contacts} filter={filter} deleteContact={this.deleteContact} />
        </div>
      </div>
    );
  }
};


export default App;
