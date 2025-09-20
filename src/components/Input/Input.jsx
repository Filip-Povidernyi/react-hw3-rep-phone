import React, { Component } from "react";
import css from "../App/style.module.css";


class Input extends Component {
    render() {
        const {type, name, placeholder, pattern, title, change, value, required} = this.props;
        return (
            <input
                className={css.input}
                type={type}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                title={title}
                value={value}
                onChange={change}
                required={required}
            />
        )
    };
};


export default Input;