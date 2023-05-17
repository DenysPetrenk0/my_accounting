import React from "react";
import {connect} from "react-redux";
import {ItemCakeStyled} from "./ItemCakeStyled";
import colors from "../../../style/colors";
import {deleteCakeOperation} from "../../../redux/Cake/cakeOperation";
import Button from "../../button/Button";

const ItemCake = ({cakes, deleteCakeOperation}) => {
    return cakes.map((cake) => (
        <ItemCakeStyled key={cake.id} colors={colors}>
            <div className="cake__item__text">
                <p>{"date"}</p>
                <p>{cake.name}</p>
                <p>{cake.cake}</p>
                <p>{cake.cost}</p>
                <p>{cake.phone}</p>
            </div>
            <div className="cake__item__button">
                <button>змінити</button>
                {/*<button type="button" onClick={() => deleteCakeOperation(cake.id)}>видалити</button>*/}
                <Button name={"видалити"} func={deleteCakeOperation} value={cake.id} bgColor={"#14dc6783"}/>
            </div>
        </ItemCakeStyled>
    ));
};

const mapStateToProps = (state) => {
    return {
        cakes: state.cake.items
    }
}

export default connect(mapStateToProps, {
    deleteCakeOperation
})(ItemCake);