import React from "react";
import colors from "../../../style/colors";
import {HeadeerListStyled} from "./HeaderListStyled";
import {NavLink} from "react-router-dom";
import {headerRoutes} from "../../../routes/headerRoutes";

const HeaderList = () => {
    return(
        <HeadeerListStyled colors={colors}>
            {headerRoutes.map(({path, name}) => (
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
        </HeadeerListStyled>
    );
}

export default HeaderList;