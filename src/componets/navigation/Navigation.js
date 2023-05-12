import React from "react";
import colors from "../../style/colors";
import {NavLink} from "react-router-dom";
import {NavigationStyled} from "./NavigationStyled";
import {navigationRoutes} from "../../routes/navigationRoutes";
import navIcon from "../navigation/icon/nav.svg"

const Navigation = () => {
    return(
        <NavigationStyled colors={colors}>
            {navigationRoutes.map(({path, name, icon}) => (
                <li key={path} className="nav__list__item">
                    <NavLink
                        to={path}
                        className="nav__list__link"
                        activeClassName="nav__list__link-activ"
                    >
                        <svg className="nav__list__link__icon" height="17" width="17">
                            <use href={navIcon + icon}></use>
                        </svg>
                        {name}
                    </NavLink>
                </li>
            ))}
        </NavigationStyled>
    );
}

export default Navigation;