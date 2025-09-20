import React, { Component } from "react";
import Input from "components/Input/Input";


class Filter extends Component {
    render() {
        const { filter, handlerChange } = this.props;
        return (<>
            <p>Find contacts by name</p>
            <Input change={handlerChange} type="text" name="filter" placeholder="Search contacts" value={filter} />
        </>
        )
    };
};


export default Filter;