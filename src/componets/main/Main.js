import React from "react";
import {MainStyled} from "./MainStyled";
import Navigation from "../navigation/Navigation";
import Content from "../content/Content";
import colors from "../../style/colors";

const Main = () => {
  return (
      <MainStyled colors = {colors}>
        <Navigation />
        <Content />
      </MainStyled>
  );
};

export default Main;