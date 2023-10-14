import React from "react";
import {ListCostStyled} from "./ListCostStyled";
import colors from "../../../style/colors";
import ItemCost from "./itemCost/ItemCost";

const ListCost = () => {
    return (
        <ListCostStyled colors={colors}>
            <div className="cost__box">
                <p className="cost__title">назва</p>
                <p className="cost__title">загальна сумма</p>
                <p className="cost__title">понеділок</p>
                <p className="cost__title">вівторок</p>
                <p className="cost__title">середа</p>
                <p className="cost__title">четверг</p>
                <p className="cost__title">п'ятниця</p>
                <p className="cost__title">субота</p>
                <p className="cost__title">неділя</p>
            </div>
            <ItemCost />
        </ListCostStyled>
    );
};

export default ListCost;