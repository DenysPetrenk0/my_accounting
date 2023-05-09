import React from "react";
import Header from './componets/header/Header';
import Main from "./componets/main/Main";
import {ContainerStyled} from "./componets/container/ContainerStyled";

const App = () => {
  return (
      <>
          <ContainerStyled>
              <Header />
              <Main />
          </ContainerStyled>
      </>
  );
}

export default App;
