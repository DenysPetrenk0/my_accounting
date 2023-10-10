import React from "react";
import {WeekPageStyled} from "./WeekPageStyled";
import colors from "../../style/colors";
import arrowIcon from "../week/icon/arrow.svg";

const WeekPage = () => {
  return(
      <WeekPageStyled colors={colors}>
          <div className="week__number">
              <h2 className="week__number__current-day">04.10.2023</h2>
              <div className="week__number__box">
                  <button type="button" className="week__number__button-arrow">
                      <svg className="week__number__button-arrow__icon" height="17" width="17">
                          <use href={arrowIcon + "#arrow-left"}></use>
                      </svg>
                  </button>
                  <h2 className="week__number__current-week">04.10.2023 - 11.10.2023</h2>
                  <button type="button" className="week__number__button-arrow">
                      <svg className="week__number__button-arrow__icon" height="17" width="17">
                          <use href={arrowIcon + "#arrow-right"}></use>
                      </svg>
                  </button>
              </div>
              <form>
                  <label className="week__number__add">
                      <input className="week__number__add-input" type="text" placeholder="додати графу"/>
                      <buttom className="week__number__button-add">
                          <svg className="week__number__button-add__icon" height="17" width="17">
                              <use href={arrowIcon + "#plus"}></use>
                          </svg>
                      </buttom>
                  </label>
              </form>
          </div>
          <div className="week__content">
              <div className="week__content__box">
                  <p className="week__content__title">назва</p>
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
                      <input type="text" className="week__content__form__input"/>
                      <button></button>
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