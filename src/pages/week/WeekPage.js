import React from "react";
import {WeekPageStyled} from "./WeekPageStyled";
import colors from "../../style/colors";
import arrowIcon from "../week/icon/arrow.svg";

const WeekPage = () => {
  return(
    <WeekPageStyled colors={colors}>
      <h2 className="week__current-day">04.10.2023</h2>
      <div className="week__container">
          <button type="button" className="week__button-arrow">
              <svg className="week__button-arrow__icon" height="17" width="17">
                  <use href={arrowIcon + "#arrow-left"}></use>
              </svg>
          </button>
          <ul className="week__list">
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">Понеділок</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">Вівторок</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">Середа</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">Четверг</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">П'ятниця</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">Субота</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
              <li className="week__item">
                  <div className="week__item__name">
                      <h2 className="week__item__title">Неділя</h2>
                      <p className="week__item__date">04.10.2023</p>
                  </div>
                  <div className="week__item__content">
                      <p className="week__item__count">1000</p>
                  </div>
              </li>
          </ul>
          <button type="button" className="week__button-arrow">
              <svg className="week__button-arrow__icon" height="17" width="17">
                  <use href={arrowIcon + "#arrow-right"}></use>
              </svg>
          </button>
      </div>
    </WeekPageStyled>
  );
};

export default WeekPage;