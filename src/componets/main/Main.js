import React from "react";
import {MainStyled} from "./MainStyled";
import ContentSwitcher from "../../contentSwitcher/contentSwitcher";
import {headerRoutes} from "../../routes/headerRoutes";

const Main = () => {
  return (
      <MainStyled>
        <ContentSwitcher routes={headerRoutes}/>
      </MainStyled>
  );
};

export default Main;