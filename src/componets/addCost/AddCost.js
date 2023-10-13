import React, {Component} from "react";
import addCostIcon from "./icon/addCostIcon.svg";
import {AddCostStyled} from "./AddCostStyled";
import colors from "../../style/colors";
import {connect} from "react-redux";
import {addCostOperation, getCostOperation} from "../../redux/Cost/costOperation";

class AddCost extends Component {

    state = {cost: ""};

    componentDidMount = () => {
        this.props.getCostOperation();
    };

    onHandleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    onSubmit = (event) => {
        const {cost} = this.state;
        event.preventDefault();
        this.props.addCostOperation({cost});
        this.setState({cost: ""});
    };

    render() {

        return (
            <AddCostStyled onSubmit={this.onSubmit} colors={colors}>
                <label className="cost-add__container">
                    <input
                        value={this.state.cost}
                        onChange={this.onHandleChange}
                        className="cost-add__input"
                        type="text"
                        placeholder="додати графу"
                        autoComplete="off"
                        name="cost"
                        required
                    />
                    <button type="submit" className="cost-add__button">
                        <svg className="cost-add__button__icon" height="17" width="17">
                            <use href={ addCostIcon + "#plus" }></use>
                        </svg>
                    </button>
                </label>
            </AddCostStyled>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cost: state.cost
    };
};

export default connect(mapStateToProps, {addCostOperation, getCostOperation}) (AddCost);