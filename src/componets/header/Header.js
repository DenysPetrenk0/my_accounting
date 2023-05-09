import React from "react";
import {HeaderStyled} from "./HeaderStyled";
import colors from "../../style/colors";

const Header = () => {

  return (
      <HeaderStyled colors={colors}>
        <h1 className="headerLogo">My accounting</h1>
      </HeaderStyled>
  );
};

export default Header;