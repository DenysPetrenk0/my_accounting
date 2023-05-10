import React, {Component} from "react";
import {AddCakeStyled} from "./AddCakeStyled";
import colors from "../../style/colors";

class AddCake extends Component {

    state = {
        name: "",
        cake: "",
        cost: "",
        phone: ""
    };

    onHandleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value })

    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        const {name, cake, phone, cost} = this.state;

        return (
            <AddCakeStyled onSubmit={this.onSubmit} colors = {colors}>
                <label>
                    <input
                        value={name}
                        type="text"
                        name="name"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        placeholder="name:"
                        required
                    />
                    <input
                        value={cake}
                        type="text"
                        name="cake"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        placeholder="cake:"
                        required
                    />
                    <input
                        value={phone}
                        type="tel"
                        name="phone"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        placeholder="phone:"
                        required
                    />
                    <input
                        value={cost}
                        type="number"
                        name="cost"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        placeholder="cost:"
                        required
                    />
                    <button type="submit">add</button>
                </label>
            </AddCakeStyled>
        );
    }
}

export default AddCake;