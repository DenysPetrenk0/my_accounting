import React from "react";
import {ButtonStyled} from "./ButtonStyled";

const Button = ({name, func, value, bgColor}) => {

    return (
        <ButtonStyled type="button" onClick={() => func(value)} bgColor={bgColor}>
            {name}
        </ButtonStyled>
    );
};

export default Button;