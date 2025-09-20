import React, { Component } from "react";
import css from "../App/style.module.css";


class Button extends Component {
    render() {
        const { type, name, children, click, className } = this.props;
        return (
            <button
                className={`${css.btn} ${className || ''}`}
                type={type}
                name={name}
                onClick={click}
            >{children}
            </button>
        )
    };
};


export default Button;