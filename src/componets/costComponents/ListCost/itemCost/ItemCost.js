import React from "react";
import {ItemCostStyled} from "./ItemCostStyled";
import colors from "../../../../style/colors";
import itemCostIcon from "./icon/itemCostIcon.svg";
import {connect} from "react-redux";
import {deleteCostOperation} from "../../../../redux/Cost/costOperation";

const ItemCost = ({costs, deleteCostOperation}) => {
    return costs.map((cost) => (
        <ItemCostStyled colors={colors} key={cost.id}>
            <label className="cost__container">
                <div className="cost__name__box">
                    <p className="cost__name">{cost.cost}</p>
                    <button type="button" className="cost__button" onClick={() => deleteCostOperation(cost.id)}>
                        <svg className="cost__button__icon" height="17" width="17">
                            <use href={itemCostIcon + "#del"}></use>
                        </svg>
                    </button>
                </div>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
                <input type="text" className="cost__input"/>
            </label>
        </ItemCostStyled>
    ));
};

const mapStateToProps = (state) => {
    return {
        costs: state.cost.items
    }
};


export default connect(mapStateToProps, {deleteCostOperation})(ItemCost);