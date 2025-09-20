import React, { Component } from "react";
import Button from "components/Button/Button";
import css from "../App/style.module.css";


class ContactsList extends Component {

    capitalize = (contact) => {
    let newName = contact.split(' ').map(word => (
      word[0].toUpperCase() + word.slice(1)
    )
    ).join(' ');
    return newName
  }
  
    handlerClick = (evt) => {
        this.props.deleteContact(evt.target.name);
    };

    render() {
        const { data, filter } = this.props;
        const filteredContacts = data.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLowerCase()));
        return (
            <ul  className={css.list}>
                {filteredContacts.map(contact => (
                <li key={contact.id}>
                    {this.capitalize(contact.name)}: {contact.number}
                    <Button type="button" name={contact.name} click={this.handlerClick} className={css.delBtn}>Delete</Button>
                </li>
            ))}
          </ul>
        )
    }
};


export default ContactsList;