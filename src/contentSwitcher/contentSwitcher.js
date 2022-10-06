import React from "react";
import {Switch, Route} from "react-router-dom";

const contentSwitcher = ({routes}) => {
    return(
        <Switch>
            {routes.map(({path, exact, component}) => (
                <Route path={path} exact={exact} component={component} key={path}/>
            ))};
        </Switch>
    );
};

export default contentSwitcher;
