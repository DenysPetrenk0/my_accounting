import React from "react";
import {WeekPageStyled} from "./WeekPageStyled";
import colors from "../../style/colors";
import weekIcon from "./icon/weekIcom.svg";
import AddCost from "../../componets/costComponents/addCost/AddCost";
import ListCost from "../../componets/costComponents/ListCost/ListCost";

const WeekPage = () => {
  return(
      <WeekPageStyled colors={colors}>
          <div className="week__number">
              <h2 className="week__number__current-day">04.10.2023</h2>
              <div className="week__number__box">
                  <button type="button" className="week__number__button-arrow">
                      <svg className="week__number__button-arrow__icon" height="17" width="17">
                          <use href={weekIcon + "#arrow-left"}></use>
                      </svg>
                  </button>
                  <h2 className="week__number__current-week">04.10.2023 - 11.10.2023</h2>
                  <button type="button" className="week__number__button-arrow">
                      <svg className="week__number__button-arrow__icon" height="17" width="17">
                          <use href={weekIcon + "#arrow-right"}></use>
                      </svg>
                  </button>
              </div>
              <AddCost />x
          </div>
          <ListCost />
      </WeekPageStyled>
  );
};

export default WeekPage;