import React from "react";
import ContentSwitcher from "../../contentSwitcher/contentSwitcher";
import {navigationRoutes} from "../../routes/navigationRoutes";
import {ContentStyled} from "./ContentStyled";

const Content = () => {
    return (
        <ContentStyled>
            <ContentSwitcher routes={navigationRoutes}/>
        </ContentStyled>
    );
};

export default Content;