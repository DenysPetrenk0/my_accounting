import React from "react";
import {WeekPageStyled} from "./WeekPageStyled";
import colors from "../../style/colors";

const WeekPage = () => {
  return(
    <WeekPageStyled colors={colors}>
      <h2 className="week__current-day">04.10.2023</h2>
      <div className="week__container">
          <button type="button">arrow left</button>
          <ul className="week__list">
              <li className="week__item">
                  <h2 className="week__item__title">Понеділок</h2>
                  <p className="week__item__date">04.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
              <li className="week__item">
                  <h2 className="week__item__title">Вівторок</h2>
                  <p className="week__item__date">05.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
              <li className="week__item">
                  <h2 className="week__item__title">Середа</h2>
                  <p className="week__item__date">06.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
              <li className="week__item">
                  <h2 className="week__item__title">Четверг</h2>
                  <p className="week__item__date">07.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
              <li className="week__item">
                  <h2 className="week__item__title">П'ятниця</h2>
                  <p className="week__item__date">08.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
              <li className="week__item">
                  <h2 className="week__item__title">Субота</h2>
                  <p className="week__item__date">09.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
              <li className="week__item">
                  <h2 className="week__item__title">Неділя</h2>
                  <p className="week__item__date">10.10.2023</p>
                  <p className="week__item__count">1000</p>
              </li>
          </ul>
          <button type="button">arrow right</button>
      </div>
    </WeekPageStyled>
  );
};

export default WeekPage;