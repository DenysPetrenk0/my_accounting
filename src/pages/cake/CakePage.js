import React from "react";
import AddCake from "../../componets/addCake/AddCake";
import {CakePageStyled} from "./CakePageStyled";

const CakePage = () => {

  return(
      <CakePageStyled>
          <h2>CakePage</h2>
          <AddCake />
      </CakePageStyled>
  );
};

export default CakePage;