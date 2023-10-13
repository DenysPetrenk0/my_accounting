import React from "react";
import {WeekPageStyled} from "./WeekPageStyled";
import colors from "../../style/colors";
import weekIcon from "./icon/weekIcom.svg";
import AddCost from "../../componets/addCost/AddCost";

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
              <AddCost />
          </div>
          <div className="week__content">
              <div className="week__content__box">
                  <p className="week__content__title">назва</p>
                  <p className="week__content__title">загальна сумма</p>
                  <p className="week__content__title">понеділок</p>
                  <p className="week__content__title">вівторок</p>
                  <p className="week__content__title">середа</p>
                  <p className="week__content__title">четверг</p>
                  <p className="week__content__title">п'ятниця</p>
                  <p className="week__content__title">субота</p>
                  <p className="week__content__title">неділя</p>
              </div>
              <form className="week__content__form">
                  <label className="week__content__form__label">
                      <div className="week__content__form__name__box">
                          <p className="week__content__form__name">витрата</p>
                          <button type="button" className="week__content__form__button-del">
                              <svg className="week__number__button-arrow__icon" height="17" width="17">
                                  <use href={weekIcon + "#del"}></use>
                              </svg>
                          </button>
                      </div>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                      <input type="text" className="week__content__form__input"/>
                  </label>
              </form>
          </div>
      </WeekPageStyled>
  );
};

export default WeekPage;