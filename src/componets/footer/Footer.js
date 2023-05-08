import React from "react";
import {FooterStyled} from "./FooterStyled";
import colors from "../../style/colors";

const Footer = () => {

    return (
        <FooterStyled colors = {colors}>
            <div>footer</div>
        </FooterStyled>
    );
};

export default Footer;