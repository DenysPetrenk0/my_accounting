import React from "react";
import AddCake from "../../componets/addCake/AddCake";
import {CakePageStyled} from "./CakePageStyled";

const CakePage = () => {

  return(
      <CakePageStyled>
          <AddCake />
      </CakePageStyled>
  );
};

export default CakePage;