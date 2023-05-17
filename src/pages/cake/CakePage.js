import React from "react";
import AddCake from "../../componets/addCake/AddCake";
import {CakePageStyled} from "./CakePageStyled";
import ListCake from "../../componets/listCake/ListCake";

const CakePage = () => {

  return(
      <CakePageStyled>
          <AddCake />
          <ListCake />
      </CakePageStyled>
  );
};

export default CakePage;