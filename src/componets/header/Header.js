import React from "react";
import {HeaderStyled} from "./HeaderStyled";
import colors from "../../style/colors";
import headerLogo from "../header/icon/headerLogo.svg"

const Header = () => {

  return (
      <HeaderStyled colors={colors}>
        <svg className="header__logo__icon" height="30" width="30">
           <use href={headerLogo + "#headerLogo"}></use>
        </svg>
        <h1 className="header__logo">My accounting</h1>
      </HeaderStyled>
  );
};

export default Header;