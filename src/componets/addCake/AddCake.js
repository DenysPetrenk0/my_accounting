import React, {Component} from "react";

class AddCake extends Component {

    state = {
        name: "",
        cake: "",
        cost: ""
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
        const {name, cake, cost} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    name:
                    <input
                        value={name}
                        type="text"
                        name="name"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        required
                    />
                    cake:
                    <input
                        value={cake}
                        type="text"
                        name="cake"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        required
                    />
                    cost:
                    <input
                        value={cost}
                        type="number"
                        name="cost"
                        autoComplete="off"
                        onChange={this.onHandleChange}
                        required
                    />
                    <button type="submit">add</button>
                </label>
            </form>
        );
    }
}

export default AddCake;