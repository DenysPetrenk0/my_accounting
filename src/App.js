import React from "react";
import Header from './componets/header/Header';
import Main from "./componets/main/Main";
import {ContainerStyled} from "./componets/container/containerStyled";
import Footer from "./componets/footer/Footer";

const App = () => {
  return (
      <>
          <ContainerStyled>
              <Header />
              <Main />
              <Footer />
          </ContainerStyled>
      </>
  );
}

export default App;
