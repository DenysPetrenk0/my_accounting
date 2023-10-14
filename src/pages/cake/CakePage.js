import React from "react";
import AddCake from "../../componets/cakeComponents/addCake/AddCake";
import {CakePageStyled} from "./CakePageStyled";
import ListCake from "../../componets/cakeComponents/listCake/ListCake";

const CakePage = () => {

  return(
      <CakePageStyled>
          <AddCake />
          <ListCake />
      </CakePageStyled>
  );
};

export default CakePage;