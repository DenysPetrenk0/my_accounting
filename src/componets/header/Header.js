import React from "react";
import HeaderList from "./headerList/HeaderList";
import {HeaderStyled} from "./HeaderStyled";
import colors from "../../style/colors";

const Header = () => {

  return (
      <HeaderStyled colors={colors}>
        <h1 className="headerLogo">My accounting</h1>
        <nav>
          <HeaderList colors={colors}/>
        </nav>
      </HeaderStyled>
  );
};

export default Header;