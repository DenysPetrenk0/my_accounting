import React from "react";
import ContentSwitcher from "../../contentSwitcher/contentSwitcher";
import {navigationRoutes} from "../../routes/navigationRoutes";
import {ContentStyled} from "./ContentStyled";
import colors from "../../style/colors";

const Content = () => {
    return (
        <ContentStyled colors={colors}>
            <ContentSwitcher routes={navigationRoutes}/>
        </ContentStyled>
    );
};

export default Content;