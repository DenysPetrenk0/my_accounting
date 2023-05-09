import React from "react";
import colors from "../../style/colors";
import {NavLink} from "react-router-dom";
import {NavigationStyled} from "./NavigationStyled";
import {navigationRoutes} from "../../routes/navigationRoutes"
const Navigation = () => {
    return(
        <NavigationStyled colors={colors}>
            {navigationRoutes.map(({path, name}) => (
                <li key={path} className="headerListItem">
                    <NavLink
                        to={path}
                        className="headerListLink"
                        activeClassName="activHeaderListLink"
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </NavigationStyled>
    );
}

export default Navigation;