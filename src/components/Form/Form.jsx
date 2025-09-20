import React, { Component } from "react";
import css from "../App/style.module.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";



class Form extends Component {

    state = {
        name: '',
        number: ''
    };

    handlerChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handlerSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.addContact(name, number);
        this.setState({ name: '', number: '' })
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handlerSubmit}
                className={css.inputContainer}

            >
                <label className={css.inputBtn}>
                Name
                    <Input
                        change={this.handlerChange}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required={true}
                    />
                </label>
                <label className={css.inputBtn}>
                Number
                    <Input
                        change={this.handlerChange}
                        type="tel"
                        name="number"
                        placeholder="Phone number"
                        value={number}
                        pattern="\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required={true}
                    />
                </label>
                <Button type="submit" class={css.btn}>Add contact</Button>
          </form>
        )
    }
};


export default Form;