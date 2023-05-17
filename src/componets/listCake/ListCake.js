import React from "react";
import ItemCake from "./itemCake/ItemCake";
import {ListCakeStyled} from "./ListCakeStyled";
import colors from "../../style/colors";

const ListCake = () => {
    return (
        <ListCakeStyled colors={colors}>
            <div className="cake__list__title">
                <p>date</p>
                <p>name</p>
                <p>cake</p>
                <p>cost</p>
                <p>phone</p>
            </div>
            <ul className="cale__list__content">
                <ItemCake />
            </ul>
        </ListCakeStyled>
    );
};

export default ListCake;