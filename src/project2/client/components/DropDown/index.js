import React, { Component } from "react";

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { manager: { managerId: "", managerName: "" } };
    }

    handleChange = e => {
        let value = this.props.users.filter(
            user => user._id === e.target.value
        );
        let pendding = {
            managerId: e.target.value,
            managerName: value[0].name
        };

        this.setState({ manager: { ...pendding } });
        this.props.handleClick(pendding);
        console.log("dd:", pendding);
    };

    render() {
        let users = [...this.props.users];

        let optionTemplate = users.map((user, key) => (
            <option value={user._id} key={key}>
                {user.name}
            </option>
        ));
        return (
            <select
                value={this.state.manager.managerName}
                onChange={this.handleChange}
            >
                <option value={this.state.manager.managerName}>
                    {this.state.manager.managerName}
                </option>
                {optionTemplate}
            </select>
        );
    }
}

export default DropDown;
